// module.exports = {
//     get : (req, res) => {
//         res.render("index")
//     },
//     post : (req, res, next) => {
//         console.log("username to be saved: ", req.body.username)
//         res.send(req.body.username);
//         next()
//     }
// };

const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("index")
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};