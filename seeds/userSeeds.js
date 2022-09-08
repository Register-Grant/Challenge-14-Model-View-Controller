const { User } = require('../models');

const userData = [{
        name: "LLBC23",
        email: "llbc23@yahoo.com",
        password: "root"
    },
    {
        name: "FireTheCannons",
        email: "firethecannons@hotmail.com",
        password: "gobucs"
    },
    {
        name: "HowBoutThemGators",
        email: "gogators@ufl.edu",
        password: "password"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;