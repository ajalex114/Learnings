
`npm init`  

`npm install --save express nodemon`

`npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0`

`npm install --save express-graphql graphql`


* open package.json

in `scripts`, add `"start": "nodemon ./index.js --exec babel-node -e js"`

* create a new file `.babelrc`

content : 
``` json
{
    "presets": [
        "env",
        "stage-0"
    ]
}
```

* create file `index.js`

* create `schema.js`