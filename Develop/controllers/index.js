const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const writePostRoutes = require('./writePostRoutes')
const apiRoutes = require('./api');

const userDashboard = [
    dashboardRoutes,
    writePostRoutes
]

router.use('/', homeRoutes);
router.use('/dashboard', userDashboard);
router.use('/api', apiRoutes);

module.exports = router;
