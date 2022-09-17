const router = require('express').Router();
const { User, Post } = require('../../models');

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// todo: finish user routes
// *DONE
router.use('/user', userRoutes);

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// todo: finish post routes
router.use('/post', postRoutes);

router.get('/posts', async (req, res) => {
    const post = await Post.findAll();
    res.json(post);
});

// todo: finish comment routes
router.use('/comment', commentRoutes);


module.exports = router;