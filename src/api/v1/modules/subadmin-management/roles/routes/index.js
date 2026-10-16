const router = require('express').Router();
const rolesRoutes = require('./roles.routes');

router.use('/', rolesRoutes);

module.exports = router;
