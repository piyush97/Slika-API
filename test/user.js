const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, beforeEach, it } = require('mocha');
const User = require('./../models/User');
const server = require('./../server');


const expect = chai.expect;
chai.use(chaiHttp);

describe('Users creation tests', () => {
  const testUser = {
    name: 'testuser',
    email: 'some@email.com',
    password: 'supersecurepassword',
    password2: 'supersecurepassword',
  };

  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      console.error(err);
      done();
    });
  });

  describe('POST /register', () => {
    it('should registrate a new user', (done) => {
      chai.request(server)
        .post('/register')
        .send(testUser)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
