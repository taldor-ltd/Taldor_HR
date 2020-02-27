const router = require("express").Router();
const db = require('../startup/db');

router.route("/login").post((req, res) => {
    // const user = {
    //     username: req.body.username,
    //     password: req.body.password
    // };
    //const { username, password } = req.body;
    res.status(200).json(req.body);
});

module.exports = router;