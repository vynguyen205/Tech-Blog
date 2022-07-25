const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;
