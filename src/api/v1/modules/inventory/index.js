const express = require('express');
const categories = require('./categories');
const products = require('./products');
const stock = require('./stock');

const adminRouter = express.Router();
adminRouter.use('/categories', categories.adminRouter);
adminRouter.use('/products', products.adminRouter);
adminRouter.use('/stock', stock.adminRouter);

const userRouter = express.Router();
userRouter.use('/categories', categories.userRouter);
userRouter.use('/products', products.userRouter);

module.exports = {
  adminRouter,
  userRouter
};
