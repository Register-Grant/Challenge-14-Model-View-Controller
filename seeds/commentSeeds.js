const { Comment } = require('../models');

const commentData = [{
        content: 'Lol. Dummy.',
        date_created: 1471856624000,
        user_id: 1
    },
    {
        content: 'Ur cool though',
        date_created: 1471856624000,
        user_id: 2
    },
    {
        content: 'I think maybe so?!',
        date_created: 1471856624000,
        user_id: 3
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;