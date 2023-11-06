const express = require("express");
const groceriesRouter = express.Router();

const {
  getGrocery,
  createGrocery,
  deleteGrocery,
  updateGrocery,
} = require("../controllers/groceries.controller");

groceriesRouter.get("/", getGrocery);
groceriesRouter.post("/", createGrocery);
groceriesRouter.delete("/:id", deleteGrocery);
groceriesRouter.put("/:id", updateGrocery);

module.exports = groceriesRouter;
