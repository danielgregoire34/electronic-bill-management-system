const express = require('express');
const router = express.Router();
const userRoutes = require('./api/userRoutes');
const accountRoutes = require('./api/subscriptionroutes');
//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/',homeRoutes);
router.use('/users',userRoutes);
router.use('/acccounts',accountRoutes);
//router.use('/api',apiRoutes);

module.exports = router;