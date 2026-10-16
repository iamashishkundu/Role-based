const router = require('express').Router();
const subadminsRoutes = require('./subadmins.routes');

router.use('/', subadminsRoutes);

module.exports = router;
