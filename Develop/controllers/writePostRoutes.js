const router = require('express').Router();
const isAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

router.get('/write', isAuth, (req, res) => {
    res.render('writePost');
})


module.exports = router;