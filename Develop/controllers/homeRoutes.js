const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;
