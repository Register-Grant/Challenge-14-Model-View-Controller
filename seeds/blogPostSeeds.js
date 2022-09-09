const { BlogPost } = require('../models');

const blogPostData = [{
        title: 'Do I Know How To Code Now?',
        content: 'Nope',
        // date_created: 1471856624000
    },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;