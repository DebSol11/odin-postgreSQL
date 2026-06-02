const express = require("express");

const app = express();

// Here we initiate the routes
const newRoute = require("./routes/new");
const deleteRoute = require("./routes/delete");

const newController = require("./controllers/newController");
const deleteController = require("./controllers/deleteController");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRoute);
app.use("/delete", deleteRoute)

app.get("/", newController.getUsernames);

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
