const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    userType: {
      type: String,
      default: "User",
    },
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
