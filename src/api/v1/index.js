const express = require('express');
const { models } = require('@db');
const { ERROR_CODES, MESSAGES } = require('@constants/messages');

const router = express.Router();

// Inline Maintenance-Mode Middleware
// Returns 503 for all endpoints except /admin/*, /subadmin/*, /settings/public, and health checks
router.use(async (req, res, next) => {
  const currentPath = req.path;
  if (
    currentPath === '/health' ||
    currentPath.startsWith('/admin') ||
    currentPath.startsWith('/subadmin') ||
    currentPath.startsWith('/settings/public')
  ) {
    return next();
  }

  try {
    const maintenanceSetting = await models.Setting.findOne({
      where: { key: 'site.maintenanceMode' }
    });

    if (maintenanceSetting) {
      let isEnabled = maintenanceSetting.value;
      if (typeof isEnabled === 'string') {
        try {
          isEnabled = JSON.parse(isEnabled);
        } catch {
          isEnabled = false;
        }
      }
      if (isEnabled === true) {
        return res.status(503).json({
          success: false,
          message: MESSAGES.MAINTENANCE_MODE,
          code: ERROR_CODES.MAINTENANCE_MODE
        });
      }
    }
  } catch {
    // Pass on error to avoid blocking the app
  }

  return next();
});

// Health check endpoint
router.get('/health', (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      uptime: process.uptime()
    }
  });
});

// Modules will be mounted here as each phase is completed
// Section 4.1 Mount Map:
// Specific admin routes first
router.use('/admin/user-management', require('./modules/user-management'));
router.use('/admin/subadmin-management', require('./modules/subadmin-management'));
router.use('/admin/inventory', require('./modules/inventory').adminRouter);
router.use('/admin/notifications', require('./modules/notifications').adminRouter);
router.use('/admin/faq', require('./modules/faq').adminRouter);
router.use('/admin/settings', require('./modules/settings').adminRouter);
router.use('/admin/help', require('./modules/help').adminRouter);

// Account routes
router.use('/user', require('./modules/user'));
router.use('/admin', require('./modules/admin'));
router.use('/subadmin', require('./modules/subadmin'));

// Generic admin mounts for orders, wallets, transactions
router.use('/admin', require('./modules/orders').adminRouter);
router.use('/admin', require('./modules/wallet').adminRouter);
router.use('/admin', require('./modules/transactions').adminRouter);

// Customer-facing mounts
router.use('/catalog', require('./modules/inventory').userRouter);
router.use('/notifications', require('./modules/notifications').userRouter);
router.use('/faq', require('./modules/faq').userRouter);
router.use('/settings/public', require('./modules/settings').publicRouter);
router.use('/help', require('./modules/help').userRouter);

// User-facing root mounts: cart, coupons, orders, wallet, transactions, invoices
router.use('/', require('./modules/orders').userRouter);
router.use('/', require('./modules/wallet').userRouter);
router.use('/', require('./modules/transactions').userRouter);

module.exports = router;
