const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;
