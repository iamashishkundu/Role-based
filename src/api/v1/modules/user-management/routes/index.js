const router = require('express').Router();
const userManagementRoutes = require('./userManagement.routes');

router.use('/', userManagementRoutes);

module.exports = router;
