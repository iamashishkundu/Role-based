const router = require('express').Router();
const sessionRoutes = require('./session.routes');
const passwordRoutes = require('./password.routes');
const twoFactorRoutes = require('./twoFactor.routes');

router.use('/', sessionRoutes);
router.use('/', passwordRoutes);
router.use('/2fa', twoFactorRoutes);

module.exports = router;
