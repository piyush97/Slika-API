# Slika Api Docs
<p align="center">

<img src='https://preview.ibb.co/hEJJDK/7152018235215.png' height="300px" width="500px">
</p>

[![Build Status](https://travis-ci.com/piyush97/Slika-API.svg?token=g3CxDf8EXQoxGMAHdh9U&branch=master)](https://travis-ci.com/piyush97/Slika-API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://slika.herokuapp.com/

# Docs

---------
---------

# API Server and Base URL
## The API is Hosted on AWS Using NGINX Engine using a T2 Small with Intel Xeon family processor at Singapore(Asia)



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

Made with :blue_heart: By Piyush Mehta 