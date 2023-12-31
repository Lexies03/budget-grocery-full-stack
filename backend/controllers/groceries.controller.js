const GroceryModel = require("../models/groceries.entity");

const getGrocery = async (request, response) => {
  try {
    const grocery = await GroceryModel.find();
    response.status(200).json(grocery);
  } catch (error) {
    response.status(500).send("Internal server Error");
    console.log(error);
  }
};

const createGrocery = async (request, response) => {
  try {
    const grocery = await GroceryModel.create({ ...request.body });
    response.status(201).json(grocery);
  } catch (error) {
    response.status(500).send("Failed to add grocery");
    console.log(error);
  }
};

const deleteGrocery = async (request, response) => {
  try {
    const id = request.params.id;
    const grocery = await GroceryModel.findOneAndDelete({ _id: id });
    response.status(200).json(grocery);
  } catch (error) {
    response.status(500).send("Failed to delete grocery");
    console.log(error);
  }
};

const updateGrocery = async (request, response) => {
  try {
    const id = request.params.id;
    const grocery = await GroceryModel.findOneAndUpdate(
      { _id: id },
      { ...request.body }
    );
    response.status(200).json(grocery);
  } catch (error) {
    response.status(500).send("Failed to update grocery");
    console.log(error);
  }
};

module.exports = { getGrocery, createGrocery, deleteGrocery, updateGrocery };
