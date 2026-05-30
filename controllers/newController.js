module.exports = {
    get : (req, res) => {
        res.render("index")
    },
    post : (req, res, next) => {
        console.log("username to be saved: ", req.body.username)
        res.send(req.body.username);
        next()
    }
};