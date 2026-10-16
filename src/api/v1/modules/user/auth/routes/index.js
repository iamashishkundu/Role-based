const router = require('express').Router();
const registrationRoutes = require('./registration.routes');
const sessionRoutes = require('./session.routes');
const passwordRoutes = require('./password.routes');
const verificationRoutes = require('./verification.routes');

router.use('/', registrationRoutes);
router.use('/', sessionRoutes);
router.use('/', passwordRoutes);
router.use('/', verificationRoutes);

module.exports = router;
