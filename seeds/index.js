const sequelize = require('../config/connection');
const seedBlogPost = require('./blogpost-seeds');
const seedComment = require('./comment-seeds');
const seedUser = require('./user-seeds');

//From MVC mini project
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedBlogPost();
    await seedComment();
    await seedUser();
  
    process.exit(0);
  };
  
  seedDatabase();