const express = require('express');
const cart = require('./cart');
const coupons = require('./coupons');
const orders = require('./orders');

const adminRouter = express.Router();
adminRouter.use('/', coupons.adminRouter);
adminRouter.use('/', orders.adminRouter);

const userRouter = express.Router();
userRouter.use('/', cart.userRouter);
userRouter.use('/', coupons.userRouter);
userRouter.use('/', orders.userRouter);

module.exports = {
  adminRouter,
  userRouter
};
