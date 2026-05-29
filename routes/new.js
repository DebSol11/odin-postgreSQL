const express = require("express");
const newRouter = express.Router();
const newController = require("../controllers/newController");

newRouter.get("/", newController.get)
newRouter.post("/", newController.post)

module.exports = newRouter;