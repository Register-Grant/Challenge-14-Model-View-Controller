const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

//Is it better to use json files like we did in the mvc mini project?
const userData = require('./userData.json');
const BlogPostData = require('./BlogPostData.json');
const CommentData = require('./CommentData.json');

// //Or .js files like we did in stunning chainsaw?
// const seedUser = require('./userData');
// const seedResume = require('./resumeData');
// const seedEducation = require('./educationData');
// const seedEmployer = require('./employerData');

//From MVC mini project
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const BlogPost of BlogPostData) {
      await BlogPost.create({
        ...BlogPost,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();

// //From Stunning Chainsaw
// const seedDatabase = async () => {
//     await sequelize.sync({ force: true })
//     console.log("\n----- DATABASE SYNCED -----\n");

//     await seedUser();
//     console.log("\n----- USER SEEDED -----\n");
  
//     await seedResume();
//     console.log("\n----- RESUME SEEDED -----\n");
  
//     await seedEducation();
//     console.log("\n----- EDUCATION SEEDED -----\n");

//     await seedEmployer();
//     console.log("\n----- EMPLOYER SEEDED -----\n");

//     process.exit(0)
// }

// seedDatabase()