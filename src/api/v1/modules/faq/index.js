const express = require('express');
const categories = require('./categories');
const faqs = require('./faqs');

const adminRouter = express.Router();
adminRouter.use('/categories', categories);
adminRouter.use('/', faqs.adminRouter);

const userRouter = faqs.userRouter;

module.exports = {
  adminRouter,
  userRouter
};
