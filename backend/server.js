const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

//routes
const groceryRouter = require("./routers/groceries.router");
const userRouter = require("./routers/users.router");

const app = express();
const PORT = process.env.PORT || 2222;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((error) => {
    console.log(error, "Failed to connect with th database");
  });

app.use("/grocery", groceryRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Connected to server");
});
