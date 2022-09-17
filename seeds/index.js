const { User, Post, Comment } = require("../models");

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

const posts = [
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

const seedDatabase = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
}
seedDatabase();
