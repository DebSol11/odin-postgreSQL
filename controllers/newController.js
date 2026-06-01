const db = require("../db/queries");

// includes search functionality
async function getUsernames(req, res) {
  if (!req.query.search) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  } else {
    const username = req.query.search;
    const searchedUser = await db.searchUsername(username);
    res.send(searchedUser);
  }
}

async function createUsernameGet(req, res) {
  res.render("index");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsernameGet(req, res) {
  const username = req.query.search;
  const searchedUser = await db.searchUsername(username);
  res.send(searchedUser);
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGet,
};
