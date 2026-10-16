const express = require('express');
const subadminsRouter = require('./subadmins');
const rolesRouter = require('./roles');
const permissionsRouter = require('./permissions');

const router = express.Router();

router.use('/subadmins', subadminsRouter);
router.use('/roles', rolesRouter);
router.use('/permissions', permissionsRouter);

module.exports = router;
