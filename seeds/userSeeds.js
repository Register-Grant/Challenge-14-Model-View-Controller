const { User } = require('../models');

const userData = [{
        name: "HowBoutThemGators",
        email: "gogators@ufl.edu",
        password: "password"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;