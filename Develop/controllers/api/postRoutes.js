const router = require('express').Router();
const { Post } = require('../../models');

// GET all posts
router.get ('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
})

// GET one post by id
router.get ('/:post_id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.post_id);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
})

//create a post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update a post
router.put('/:post_id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.post_id);
    const updatedPostData = await postData.update(req.body);
    
    res.status(200).json(updatedPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const PostData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
