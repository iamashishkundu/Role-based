const router = require('express').Router();
const addressesRoutes = require('./addresses.routes');

router.use('/', addressesRoutes);

module.exports = router;
