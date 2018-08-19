# Slika Notes Api Docs
Slika Notes Api

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