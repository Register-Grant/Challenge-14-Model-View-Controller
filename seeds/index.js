const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPostSeeds');
const seedComment = require('./commentSeeds');
const seedUser = require('./userSeeds');

console.log('seeding database');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    
    await seedBlogPost();
    console.log('blog post seeded');

    await seedComment();
    console.log('comment seeded');

    await seedUser();
    console.log('user seeded');
  
    process.exit(0);
  };
  
  seedDatabase();