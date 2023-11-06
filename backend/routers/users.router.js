const express = require("express");
const userRouter = express.Router();

const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
