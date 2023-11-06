const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: Number,
    price: Number,
    total: Number,
    complete: {
      type: Boolean,
      default: false,
    },
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const GroceryModel = mongoose.model("groceries", grocerySchema);

module.exports = GroceryModel;
