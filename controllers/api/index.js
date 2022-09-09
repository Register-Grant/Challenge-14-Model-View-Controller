const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', blogPostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;