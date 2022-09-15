const Sequelize = require("sequelize");
const sequelizeConnection = require("../config/sequelizeConnection");

const Comment = sequelizeConnection.define(
  "comment",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "BlogPost",
        key: "id",
      },
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
    modelName: "comments",
  }
);

module.exports = Comment;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         content: {
//             type: DataTypes.STRING,
//         },
//         // date_created: {
//         //     type: DataTypes.DATE,
//         //     allowNull: false,
//         //     defaultValue: DataTypes.NOW,
//         //   },
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
//         modelName: 'comment',
//       }
// );

// module.exports = Comment;
