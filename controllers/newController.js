module.exports = {
    get : (req, res) => {
        res.send("Render plain old HTML here, please");
    },
    post : (req, res) => {
        console.log("username to be saved: ", req.body.username)
    }
};