const express = require('express');
const transactions = require('./transactions');
const invoices = require('./invoices');
const reports = require('./reports');

const adminRouter = express.Router();
adminRouter.use('/', transactions.adminRouter);
adminRouter.use('/', invoices.adminRouter);
adminRouter.use('/', reports.adminRouter);

const userRouter = express.Router();
userRouter.use('/', transactions.userRouter);
userRouter.use('/', invoices.userRouter);

module.exports = {
  adminRouter,
  userRouter
};
