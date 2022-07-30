const router = require('express').Router();
const isAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

router.get('/write', (req, res) => {
    res.render('writePost');
})


module.exports = router;