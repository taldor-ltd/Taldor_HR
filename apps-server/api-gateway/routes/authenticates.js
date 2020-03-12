const router = require("express").Router();
const db = require('../startup/db');
const bcrypt = require('bcrypt');

router.route("/login").post((req, res) => {
    db.sp.userGetLoginDetails(req.body.username)
        .then(([[user], metaData]) => {
            if (!user) {
                res.status(403).json({
                    message: "Incorrect username or password"
                });
                return;
            }
            bcrypt.compare(req.body.password, user.user_hash_password, (err, success) => {
                if (err) {
                    res.status(500).json({
                        message: err.message
                    });
                    return;
                }
                if (success == true) {
                    res.status(200).json({
                        data: user
                    });
                }
                else {
                    res.status(403).json({
                        message: "Incorrect username or password"
                    });
                }
            })
        });
});


module.exports = router;