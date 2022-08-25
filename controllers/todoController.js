const Todos = require("../models/todosModel");

// get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todos.find();

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};

// add new todo

exports.addNewTodo = async (req, res) => {
  try {
    const todos = await Todos.create(req.body);

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};

// get todo by id
exports.getTodoById = async (req, res) => {
  try {
    const todos = await Todos.findById(req.params.id);

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};

// update todo by id
exports.updateTodo = async (req, res) => {
  try {
    const todos = await Todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};

// delete todo by id
exports.deleteTodo = async (req, res) => {
  try {
    const todos = await Todos.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "data deleted sucessfully",
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};
