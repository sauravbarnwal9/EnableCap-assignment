const { Router } = require("express");
const { getFruit, addFruit, deleteFruit, updateFruit, putFruit } = require("../controller/fruit.controller");
const {  Validation, UpdateValidation } = require("../middlewares/Validation");



const fruitRouter=Router()

fruitRouter.get("/fruit",getFruit)
fruitRouter.post("/fruit",Validation,addFruit)
fruitRouter.put("/fruit/:id",Validation,putFruit)
fruitRouter.patch("/fruit/:id",UpdateValidation,updateFruit)
fruitRouter.delete("/fruit/:id",deleteFruit)

module.exports={
    fruitRouter
}