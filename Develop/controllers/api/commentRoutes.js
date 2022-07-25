const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments
router.get ('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET one comment by id
router.get ('/:comment_id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.comment_id);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// create a comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a comment
router.put('/:comment_id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.comment_id);
        const updatedCommentData = await commentData.update(req.body);

        res.status(200).json(updatedCommentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete a comment
router.delete('/:id', async (req, res) => {
    try {
        const CommentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!CommentData) {
            res.status(404).json({ message: 'No Comment found with this id!' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
});