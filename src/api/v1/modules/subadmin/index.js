const express = require('express');
const authRouter = require('./auth');
const profileRouter = require('./profile');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/profile', profileRouter);

module.exports = router;
