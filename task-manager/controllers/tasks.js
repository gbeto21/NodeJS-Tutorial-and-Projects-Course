const Task = require("../models/Task");

const getAllTasks = (req, res) => res.send("All items from controller.");

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

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
