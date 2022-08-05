const router = require('express').Router();
const { User } = require('../../models');

//find all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
})

//find one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create a new user
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      // save the user's id in the session
      req.session.user_id = userData.id;
      // this is where you would let session know that you are logged in
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    const updatedUserData = await userData.update(req.body);

    res.status(200).json(updatedUserData);

  } catch (err) {
    res.status(400).json(err);
  }
});

//log in route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userData = await User.findOne({ where: { username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
      
    }
    const validPassword = userData.checkPassword(password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again', success: false });

      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!', success: true });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//log out route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
