const router = require("express").Router();
const db = require('../startup/db');
const bcrypt = require('bcrypt');

router.route("/login").post((req, res) => {
    db.sp.userGetLoginDetails(req.body.username)
        .then(([[user], metaData]) => {
            bcrypt.compare(req.body.password, user.user_hash_password, (err, success) => {
                if (err) {
                    res.send("error", err);
                    return;
                }
                if (success == true) {
                    res.send("Login Successfully");
                }
                else {
                    res.send("Incorrect username or password");
                }
            })
        });
});


module.exports = router;