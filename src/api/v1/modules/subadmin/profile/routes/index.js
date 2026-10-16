const router = require('express').Router();
const profileRoutes = require('./profile.routes');

router.use('/', profileRoutes);

module.exports = router;
