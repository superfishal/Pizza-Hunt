const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");
// POST callback
router.route("/:pizzaId").post(addComment);
// DELETE callback
router.route("/:pizzaId/:commentId").delete(removeComment);
module.exports = router;
