const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const signupRoutes = require('./signupRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/bloggy', signupRoutes);
router.use('/api', apiRoutes);

module.exports = router;
