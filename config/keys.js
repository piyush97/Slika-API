const configuration = {
  mongoURI: 'mmongodb://piyush:piyush1@ds123852.mlab.com:23852/slika',
  secretOrKey: 'secret',
};

if (process.env.NODE_ENV === 'test') {
  configuration.mongoURI = 'mmongodb://:@localhost:27017/slika';
  configuration.secretOrKey = 'secret';
}

module.exports = configuration;
