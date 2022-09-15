const { User, BlogPost, Comment } = require("../models");

const users = [
  {
    username: "grantregister",
    password: "codingishard123",
  },
  {
    username: "kevinstayner",
    password: "ihavethreedogs",
  },
  {
    username: "robintarasevich",
    password: "iwatchedthissamevideo",
  },
];

const blogposts = [
  {
    title: "why coding is hard",
    content: "I really don't know why",
    user_id: 2
  },
  {
    title: "I might have 2 dogs soon",
    content: "that is super cool",
    user_id: 1
  },
  {
    title: "why did you steal my video",
    content: "you must be a jerk",
    user_id: 3
  },
];

const comments = [
  {
    content: "y'all are dumb",
    user_id: 2,
    post_id: 1
  },
  {
    content: "you can barely take care of one",
    user_id: 1,
    post_id: 2
  },
  {
    content: "definitely a jerk",
    user_id: 3,
    post_id: 3
  },
];

const plantSeeds = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await BlogPost.bulkCreate(blogposts);
  await Comment.bulkCreate(comments);
}
plantSeeds();

// const sequelize = require('../config/sequelizeConnection');
// const seedBlogPost = require('./blogPostSeeds');
// const seedComment = require('./commentSeeds');
// const seedUser = require('./userSeeds');

// console.log('seeding database');

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });
//     console.log("\n----- DATABASE SYNCED -----\n");

//     await seedBlogPost();
//     console.log('blog post seeded');

//     await seedComment();
//     console.log('comment seeded');

//     await seedUser();
//     console.log('user seeded');

//     process.exit(0);
//   };

//   seedDatabase();
