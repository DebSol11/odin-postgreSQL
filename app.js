const express = require("express");

const app = express();

// Here we initiate the routes
const newRoute = require("./routes/new")

app.use("/new", newRoute);

app.get("/", (req, res, next) => {
    console.log("usernames will be logged here - work in progress")
    res.send("Work in progress");
    next();
})

app.listen(3005, () => {
    console.log("Server running on port 3005");
})