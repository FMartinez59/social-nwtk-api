const router = require("express").Router();
const {
  getAllThought,
  createThought,
  getThoughtById,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
