const express = require("express");
const router = express.Router();
//Import controllers
const {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// //Traditional way:
// router.get("/", getAllTasks);
// router.post("/", addTask);
// router.get("/:id", getTask);
// router.patch("/:id", updateTask);
// router.delete("/:id", deleteTask);

//New way:
router.route("/").get(getAllTasks).post(addTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
