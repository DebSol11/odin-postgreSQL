const express = require("express");
const deleteRouter = express.Router();
const deleteController = require("../controllers/deleteController");

deleteRouter.get("/", deleteController.deleteAllUsersGet)

module.exports = deleteRouter;