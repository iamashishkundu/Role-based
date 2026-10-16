const router = require('express').Router();
const auditLogsRoutes = require('./auditLogs.routes');

router.use('/', auditLogsRoutes);

module.exports = router;
