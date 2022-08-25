/* eslint-disable no-undef */
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const localDb = process.env.DATABASE_LOCAL;

mongoose.connect(localDb).then((con) => {
  console.log("db connections successfully established", con);
});

const app = require("./app");
console.log(app.get("env"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("listen on port" + port);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
