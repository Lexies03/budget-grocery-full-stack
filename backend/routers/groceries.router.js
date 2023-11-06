const express = require("express");
const router = express.Router();

const {
  getGrocery,
  createGrocery,
  deleteGrocery,
  updateGrocery,
} = require("../controllers/groceries.controller");

router.get("/", getGrocery);
router.post("/", createGrocery);
router.delete("/:id", deleteGrocery);
router.put("/:id", updateGrocery);

module.exports = router;
