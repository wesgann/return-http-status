'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = (process.env.PORT || 3000);

const indexRoute = require('./routes/index');
const codeRoute = require('./routes/code');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.use('/', indexRoute);
app.use('/code', codeRoute);


app.use(function (req, res) {
    res.status(404).send({ success: false, error: 'Page not found.' });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});