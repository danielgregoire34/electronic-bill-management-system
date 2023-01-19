//const router = require('express').Router();
//const express = require('express')
const express = require('express');
const router = express.Router();

const homeRoutes = require('./homeRoutes.js');

router.use('/',homeRoutes);

module.exports = router;