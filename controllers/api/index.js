const router = require('express').Router();
const { User, Post } = require('../../models');

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.use('/post', postRoutes);

router.get('/posts', async (req, res) => {
    const post = await Post.findAll();
    res.json(post);
});

router.use('/comment', commentRoutes);


module.exports = router;