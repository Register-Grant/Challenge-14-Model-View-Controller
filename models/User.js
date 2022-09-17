const Sequelize = require("sequelize");
const sequelizeConnection = require("../config/sequelizeConnection");
const bcrypt = require("bcrypt");

const User = sequelizeConnection.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [8, 23],
      },
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [10, 55],
      },
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

User.beforeCreate(async user => {
  const userData = user.dataValues;
  console.log('intercepted data: ', user);
  userData.password = await bcrypt.hash(userData.password, 10);
});

module.exports = User;