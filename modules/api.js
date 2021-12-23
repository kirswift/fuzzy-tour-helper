const finder = require('./finder');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.json');
const app = new express();

app.use(express.static('client'));
app.use(bodyParser.json());

app.listen(config.port, () => {
    console.log(`Tour Helper запущен по порту ${config.port}`);
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/find', (req, res) => {
    let body = req.body;
    let result = finder.findCountries(body.temp, body.price, body.sea);
    res.send(result);
});