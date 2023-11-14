'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
var packageJson = require("../package.json");

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../static/home.html'));
    res.render(path.join(__dirname, '../static', 'home.html'), { version: packageJson.version });
});

module.exports = router;