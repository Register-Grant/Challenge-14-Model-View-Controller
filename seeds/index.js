const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPostSeeds');
const seedComment = require('./commentSeeds');
const seedUser = require('./userSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedBlogPost();
    await seedComment();
    await seedUser();
  
    process.exit(0);
  };
  
  seedDatabase();