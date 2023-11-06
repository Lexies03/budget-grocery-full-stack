const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    userType: {
      type: String,
      default: "User",
    },
    date: {type: Date, required: true}
  },
  { timestamps: true }
);
