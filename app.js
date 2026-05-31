const express = require("express");

const app = express();

// Here we initiate the routes
const newRoute = require("./routes/new");

const newController = require("./controllers/newController")

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRoute);

app.get("/", newController.getUsernames);

app.listen(3005, () => {
  console.log("Server running on port 3005");
});
