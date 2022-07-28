const router = require('express').Router();
const isAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

// ig user is not logged in, redirect to login
router.get('/', (req, res) => {
    res.redirect('/login');
})

router.get('/', isAuth, async (req, res) => {
    try {
        res.render('dashboard');

        const userData = await User.findOne({
            where: { id: req.session.user_id }
        });

        const postData = await Post.findAll({
            where: { user_id: req.session.user_id }
        });

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;