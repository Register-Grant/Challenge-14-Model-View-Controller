// const router = require("express").Router();

// const { BlogPost } = require("../../models");
// // const sequelize = require("../../config/connection");
// const withAuth = require("../../utils/auth");

// router.get("/", async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.findAll({
//       attributes: ["id", "title", "content", "date_created"],
//       order: [["date_created", "DESC"]],
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//         {
//           model: Comment,
//           attributes: [
//             "id",
//             "comment_text",
//             "post_id",
//             "user_id",
//             "date_created",
//           ],
//           include: {
//             model: User,
//             attributes: ["username"],
//           },
//         },
//       ],
//     });
//     res.status(200).json(dbPostData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// router.get("/:id", async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ["id", "content", "title", "date_created"],
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//         {
//           model: Comment,
//           attributes: [
//             "id",
//             "comment_text",
//             "post_id",
//             "user_id",
//             "date_created",
//           ],
//           include: {
//             model: User,
//             attributes: ["username"],
//           },
//         },
//       ],
//     });
//     console.log(dbPostData);


//     if (!dbPostData) {
//       res.status(404).json({ message: "No post found with this id" });
//       return;
//     }
//     res.status(200).json(dbPostData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// router.post("/", withAuth, async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.create({
//       title: req.body.title,
//       content: req.body.content,
//       user_id: req.session.user_id,
//     });
//     console.log(dbPostData);

//     res.status(200).json(dbPostData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.update(
//       {
//         title: req.body.title,
//         content: req.body.content,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     if (!dbPostData) {
//       res.status(404).json({ message: "No post found with this id" });
//       return;
//     }
//     res.status(200).json(dbPostData)
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!dbPostData) {
//       res.status(404).json({ message: "No post found with this id" });
//       return;
//     }
//     res.json(dbPostData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;