const express = require('express');
const authRouter = require('./auth');
const profileRouter = require('./profile');
const addressesRouter = require('./addresses');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/profile/addresses', addressesRouter);
router.use('/addresses', addressesRouter);

module.exports = router;
