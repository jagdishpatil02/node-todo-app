/* eslint-disable no-undef */
const express = require("express");
const app = express();
const morgan = require("morgan");
const todoRoutes = require("./routes/todoRoutes");
// 1.Middlewares

app.use(express.json());

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.static("./public"));

//3. Route Handlers

app.use("/api/v1/todo", todoRoutes);

module.exports = app;
