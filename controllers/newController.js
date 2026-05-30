module.exports = {
    get : (req, res) => {
        res.render("index")
    },
    post : (req, res) => {
        console.log("username to be saved: ", req.body.username)
    }
};