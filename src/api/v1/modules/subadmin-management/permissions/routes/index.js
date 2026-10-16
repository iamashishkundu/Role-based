const router = require('express').Router();
const permissionsRoutes = require('./permissions.routes');

router.use('/', permissionsRoutes);

module.exports = router;
