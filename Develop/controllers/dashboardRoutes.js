const router = require('express').Router();
const isAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

// ig user is not logged in, redirect to login
// router.get('/', (req, res) => {
//     res.redirect('/login');
// })

router.get('/', /* isAuth, */ async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id || 1},
      include: {
        model: Post,
        include: {
            model: Comment,
        }
      },
    });
    //this will only show the plain data of the user, not all of the meta data
    const data = userData.get({ plain: true });

    console.log(userData);
    res.render('dashboard', { data });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;
