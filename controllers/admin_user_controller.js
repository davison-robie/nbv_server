const router = require("express").Router();
const AdminUser = require("../db").import("../models/admin_user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ADMIN USER SIGNUP //
router.post("/create", function (req, res) {
    AdminUser.create({
        username:  req.body.admin_user.username,
        email: req.body.admin_user.email,
        password: bcrypt.hashSync(req.body.admin_user.password, 13)
    })
    .then(
        function createSuccess(admin_user) {
            let token = jwt.sign({ id: guest_user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
            res.json({
                admin_user: admin_user,
                message: "Admin user successfully created!",
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

router.post("/login", function (req, res) {
    AdminUser.findOne({
        where: {
            email: req.body.admin_user.email
        }
    })
    .then(function loginSuccess(admin_user) {
            if (admin_user) {
                bcrypt.compare(req.body.admin_user.password, admin_user.password, function (err, matches) {
                    if (matches) {
                        let token = jwt.sign({ id: admin_user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                        res.status(200).json({
                            admin_user: admin_user,
                            message: "Guest User successfully logged in!",
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({ error: "Login failed." })
                    }
                })
            } else {
                res.status(500).json({ error: "User does not exist." })
            }    
            })
    .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;