# Slika Api Docs
<p align="center">

<img src='https://preview.ibb.co/hEJJDK/7152018235215.png' height="300px" width="500px">
</p>

[![Build Status](https://travis-ci.com/piyush97/Slika-API.svg?token=g3CxDf8EXQoxGMAHdh9U&branch=master)](https://travis-ci.com/piyush97/Slika-API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Docs
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

Made with :blue_heart: By Piyush Mehta 