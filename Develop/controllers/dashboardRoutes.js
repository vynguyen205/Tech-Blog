const router = require('express').Router();
const isAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models');

// ig user is not logged in, redirect to login
router.get('/', (req, res) => {
  // if the user logged in, redirect to dashboard. Otherwise, redirect to login.
  if (req.session.user_id) {
    console.log(`getting info`, req.session)
    res.redirect(`/dashboard/`);
  } else {
    res.redirect('/login');
  }
  
})

router.get('/:username', isAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
      include: {
        model: Post,
        include: {
            model: Comment,
        }
      },
    });
    //this will only show the plain data of the user, not all of the meta data
    const data = userData.get({ plain: true });
    
    console.log(`!!!!DashboardRoutes Request: `,userData);
    res.render('dashboard', { data, logged_in: req.session.logged_in });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;
