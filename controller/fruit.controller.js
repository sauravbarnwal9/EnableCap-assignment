const { FruitModel } = require("../models/fruit.model");

// For getting the data
exports.getFruit = async (req, res) => {
  try {
    if (req.query.id) {
      let fruit = await FruitModel.findById(req.query.id);
      res.status(201).json({ message: fruit });
    } else {
      let fruit = await FruitModel.find();

      res.status(201).json({ message: fruit });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: [err], error: "something went wrong" });
  }
};


// For Adding fruit
exports.addFruit = async (req, res) => {
  try {
    const data = req.body;
    await FruitModel.create(data);

    res.status(201).json({ message: "Fruit data added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: [error], error: "something went wrong" });
  }
};

// For Putting the data here
exports.putFruit = async (req, res) => {
  try {
    const data = req.body;

    const id = req.params.id;

    let fruit = await FruitModel.findOneAndReplace({ _id: id }, data);
    res.status(200).json({
      status: "fruit has been replaced",
      data: fruit,
    });
  } catch (error) {
    res.status(400).json({ message: [error], error: "something went wrong" });
  }
};

// For Updating the fruit
exports.updateFruit = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    let fruit = await FruitModel.findOneAndUpdate({ _id: id }, data);
    res.status(200).json({
      status: "fruit has been updated",
      data: fruit,
    });
  } catch (error) {
    res.status(400).json({ message: [error], error: "something went wrong" });
  }
};

// For Deleting fruit data by id
exports.deleteFruit = async (req, res) => {
  try {
    const id = req.params.id;
    let fruit = await FruitModel.findById(id);

    await FruitModel.findOneAndDelete({ _id: id });
    console.log(fruit);
    res.status(200).json({
      status: "fruit has been deleted",
    });
  } catch (error) {
    res.status(400).json({ message: [error], error: "something went wrong" });
  }
};
