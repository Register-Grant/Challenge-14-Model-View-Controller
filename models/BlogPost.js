const Sequelize = require("sequelize");
const sequelizeConnection = require("../config/sequelizeConnection");

const BlogPost = sequelizeConnection.define(
  "blogpost",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "blogposts",
  }
);

module.exports = BlogPost;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class BlogPost extends Model {}

// BlogPost.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         content: {
//             type: DataTypes.STRING,
//         },
//         date_created: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue: DataTypes.NOW,
//           },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//               model: 'user',
//               key: 'id',
//             },
//           },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "blogpost",
//       }
// );

// module.exports = BlogPost;
