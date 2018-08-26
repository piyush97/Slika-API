# Slika Api Docs
<p align="center">

<img src='https://preview.ibb.co/hEJJDK/7152018235215.png' height="300px" width="500px">
</p>

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/Slika-api/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![Build Status](https://travis-ci.com/piyush97/Slika-API.svg?token=g3CxDf8EXQoxGMAHdh9U&branch=master)](https://travis-ci.com/piyush97/Slika-API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://slika.herokuapp.com/

# Docs

---------
---------

# API Server and Base URL
## The API is Hosted on AWS Using NGINX Engine using a AWS Serverless and Lambda at Singapore(Asia)



### POST
####  `/register`
1. User registration
1. **Input Params** `Email, Password, Confirmation Password, name` 

####  `/notes`
1. To Upload notes

####  `/login`
1. To login using:
`email, password `

### GET
`/`
1. Notes with key value pair as 
```json
{
    "notes": [
        {
            "_id": "5b796fdde7179a69ea61440c",
            "Department": "CV",
            "Subject": "Design of Pre Stressed Concrete",
            "Sem": 7,
            "Link": "https://bit.ly/2MQe38w",
            "id": 1
        }
    ]
}
```

#### Tech Used:
```json
    "bcryptjs": "2.4.3",
    "body-parser": "1.18.3",
    "esdoc": "1.1.0",
    "esdoc-standard-plugin": "1.0.0",
    "express": "4.16.3",
    "gravatar": "1.6.0",
    "joi": "13.6.0",
    "jsonwebtoken": "8.3.0",
    "mongoose": "5.2.9",
    "mustache-express": "1.2.7",
    "nodemon": "1.18.3",
    "passport": "0.4.0",
    "passport-jwt": "4.0.0",
    "validator": "10.6.0"
```

# FAQS

-------

## What Is Slika?
`Slika is an Organisation for Engineers made by Engineers`

## Why Use Slika-API?
`Slika Api not only provides you with the best notes, it also gives you authentications and userbase option to contact other students easily`

# How's the code?
This only works well by accident and was mostly a joke. The code quality is accordingly.

# License
This project is provided for educational purposes only. It is not affiliated with and has not been approved by MSRIT or any other Organisation.

```
MIT License

Copyright (c) 2018 Piyush Mehta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Made with :blue_heart: By Piyush Mehta 