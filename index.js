'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hola/:name', (req, resp) => {
    resp.send({
        message: `Hola ${ req.params.name }!`
    })
});

app.listen(port, () => {
    console.log(`APIREST corriendo en http://localhost:${ port }`);
});