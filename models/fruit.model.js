const mongoose = require("mongoose");
const fruit = new mongoose.Schema({
    name: { type: String, require: [true, "Require name"] },
    calories: { type: Number, require: [true, "Require calories"] },
 
},{
    versionKey:false
});
const FruitModel = mongoose.model("fruit", fruit);

module.exports = {
  FruitModel,
};
