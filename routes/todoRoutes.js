const express = require("express");
const router = express.Router();
const todoController = require("./../controllers/todoController");

router.route("/").get(todoController.getTodos).post(todoController.addNewTodo);
router
  .route("/:id")
  .get(todoController.getTodoById)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
