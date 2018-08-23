# Slika Notes Api Docs
Slika Notes Api

### Build Status

[![Build Status](https://travis-ci.com/piyush97/Slika-API.svg?token=g3CxDf8EXQoxGMAHdh9U&branch=master)](https://travis-ci.com/piyush97/Slika-API)

# Method to use this api 

```js
const request = require('superagent');
request
  .get('https://slika.herokuapp.com/')
  .end((err, res) => {
    console.log(res.body);
  });
```

### Made by Piyush With Love