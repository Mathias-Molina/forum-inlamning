const express = require("express");
const router = express.Router();
const {
  getAllThreads,
  getThreadById,
  createThread,
  createReply,
} = require("../controllers/threadController");

router.get("/", getAllThreads);
router.get("/:id", getThreadById);
router.post("/", createThread);
router.post("/:id/replies", createReply);

module.exports = router;
