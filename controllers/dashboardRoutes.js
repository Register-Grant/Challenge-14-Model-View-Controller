// const router = require("express").Router();
// const { User, BlogPost, Comment } = require("../models");
// const withAuth = require("../utils/auth");

// router.get("/", async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.findAll({
//       attributes: ["id", "title", "content", "date_created"],
//     })
//   res.render("dashboard", { blogpost })
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/", async (req, res) => {
//   console.log(req.session);
//   try {
//     const dbPostData = await BlogPost.findAll({
//       where: {
//         user_id: req.session.user_id,
//       },
//       attributes: ["id", "title", "content", "date_created"],
//       include: [
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
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     });

//     const posts = dbPostData.map(post => post.get({ plain: true }));

//     res.render("dashboard", { posts, loggedIn: true });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/edit/:id", withAuth, async (req, res) => {
//   try {
//     const dbPostData = await BlogPost.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ["id", "title", "content", "date_created"],
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

//     if (!dbPostData) {
//       res.status(404).json({ message: "No post found with this id" });
//       return;
//     }

//     const post = dbPostData.get({ plain: true });
//     res.render("edit-post", { post, loggedIn: true });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/new", (req, res) => {
//   res.render("new-post", { loggedIn: true });
// });

// module.exports = router;