const router = require('express').Router();
const faxDocRoute = require('./faxDocument');
const emailDocRoute = require('./emailDocument');

// Fax Document Routes - /api/v1/fax/
router.use('/fax/', faxDocRoute);

// Email Document Routes - /api/v1/email/
router.use('/email/', emailDocRoute);

module.exports = router;