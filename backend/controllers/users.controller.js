const { response } = require("express");
const UserModel = require("../models/users.entity");

const getUser = async (request, response) => {
  try {
    const user = await UserModel.find();
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to load users");
    console.log(error);
  }
};

const createUser = async (request, response) => {
  try {
    const user = await UserModel.create({ ...request.body });
    response.status(201).json(user);
  } catch (error) {
    response.status(500).send("Failed to create user");
    console.log(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await UserModel.findOneAndDelete({ _id: id });
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to delete user");
    console.log(error);
  }
};

const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { ...request.body }
    );
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send("Failed to update user");
    console.log(error);
  }
};

module.exports = { getUser, createUser, deleteUser, updateUser };
