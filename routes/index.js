const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes v1.0 - /api/v1
router.use('/api/v1', apiRoutes);

// Catch and handle all other unknown routes
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;