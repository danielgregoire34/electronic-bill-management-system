const express = require('express');
const router = express.Router();
const userRoutes = require('./api/userRoutes');

const homeRoutes = require('./homeRoutes.js');

router.use('/',homeRoutes);
router.use('/users',userRoutes);

module.exports = router;