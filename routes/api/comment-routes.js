const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");
// POST callback
router.route("/:pizzaId").post(addComment);
// DELETE callback for removing comment
router.route("/:pizzaId/:commentId").delete(removeComment);
// PUT callback to make reply
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);
// DELETE callback for removing reply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);
module.exports = router;
