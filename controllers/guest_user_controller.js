const router = require("express").Router();
const GuestUser = require("../db").import("../models/guest_user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// GUEST USER SIGNUP //
router.post("/create", function (req, res) {
    GuestUser.create({
        username:  req.body.guest_user.username,
        email: req.body.guest_user.email,
        password: bcrypt.hashSync(req.body.guest_user.password, 13),
        role: "user"
    })
    .then(
        function createSuccess(guest_user) {
            let token = jwt.sign({ id: guest_user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
            res.json({
                guest_user: guest_user,
                message: "Guest user successfully created!",
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

// GUEST USER LOGIN //
router.post("/login", function (req, res) {
    GuestUser.findOne({
        where: {
            email:req.body.guest_user.email
        }
    })
    .then(function loginSuccess(guest_user) {
        if (guest_user) {
            bcrypt.compare(req.body.guest_user.password, guest_user.password, function (err, matches) {
                if (matches) {
                    let token = jwt.sign({ id: guest_user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                    res.status(200).json({
                        guest_user: guest_user,
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