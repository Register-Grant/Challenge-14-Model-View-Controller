const { Comment } = require('../models');

const commentData = [{
        content: 'Lol. Dummy.',
        date_created: 1471856624000
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;