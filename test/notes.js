const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, beforeEach, it } = require('mocha');
const Notes = require('./../models/notes');
const server = require('./../server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Notes tests', () => {
  const testNote = {
    Department: 'Computer Science',
    Subject: 'Programming',
    Sem: 1,
    Link: 'http://www.test.com',
    id: 1,
  };

  beforeEach((done) => {
    Notes.deleteMany({}, (err) => {
      console.error(err);
      done();
    });
  });

  describe('POST /', () => {
    it('should create a new Note', (done) => {
      chai.request(server)
        .post('/')
        .send(testNote)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(Notes.findOne({ id: testNote.id })).to.exist;
          done();
        });
    });
  });

  describe('GET /', () => {
    it('should get all notes', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
