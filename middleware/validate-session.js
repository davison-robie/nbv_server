const jwt = require("jsonwebtoken");
const GuestUser = require("../db").import("../models/guest_user");

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).send({ auth: false, message: "No token provided" })
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {

            if (!err && decodeToken) {
                GuestUser.findOne({
                    where: {
                        id: decodeToken.id
                    }
                })
                .then(guest_user => {

                    if (!guest_user) throw err;

                    req.guest_user = guest_user;
                    return next();
                })
                .catch(err => next(err));
            } else {
                req.errors = err;
                return res.status(500).send("Not Authorized");
            }
        });
    }
};

module.exports = validateSession;