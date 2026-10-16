const express = require('express');
const authRouter = require('./auth');
const profileRouter = require('./profile');
const auditLogsRouter = require('./audit-logs');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/audit-logs', auditLogsRouter);

module.exports = router;
