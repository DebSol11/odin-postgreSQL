const db = require("../db/queries");

async function deleteAllUsersGet(req, res) {
    const usernames = await db.getAllUsernames();
    await db.deleteAllUsernames()
    console.log("Usernames: ", usernames, "deleted");
    console.log("Usernames: ")
    res.send("Usernames deleted")
}

module.exports = { deleteAllUsersGet };
