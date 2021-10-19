const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes v1.0 - /api/v1
router.post('/api/v1', apiRoutes);

module.exports = router;