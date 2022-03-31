const getAllTasks = (req, res) => res.send("All items from controller.");

const addTask = (req, res) => res.send("Addig task");

const getTask = (req, res) => res.send("Getting task");

const updateTask = (req, res) => res.send("Updating task");

const deleteTask = (req, res) => res.send("Deleting task");

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};
