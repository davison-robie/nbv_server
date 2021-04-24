const router = require("express").Router();
const Cart = require("../db").import("../models/cart");
let validateSession = require("../middleware/validate-session");

// CREATE CART //
router.post("/create", validateSession, function (req, res) {
    Cart.create({
        user_id: req.guest_user.id,
        status: req.body.cart.status,
        cart_items: req.body.cart.cart_items
    })
    .then(
        function createSuccess(cart) {
            res.json({
                cart: cart
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

// VIEW CART BY OWNER //
router.get("/view", validateSession, function (req, res) {
    const query = {
        where: { user_id: req.guest_user.id }
    };

    Cart.findOne(query)
    .then(cart => res.status(200).json(cart))
    .catch(err => res.status(500).json({ error: err }))
});

// UPDATE CART //
router.put("/update/:id", validateSession, function (req, res) {
    const updateCart = {
        status: req.body.cart.status,
        cart_items: req.body.cart.cart_items
    };

    const query = { where: { id: req.params.id } };

    Cart.update(updateCart, query)
    .then((carts) => res.status(200).json(carts))
    .catch((err) => res.status(500).json({ error: err }));
})

// DELETE CART //
router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id } };

    Cart.destroy(query)
    .then(() => res.status(200).json({ message: "Cart Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
})

module.exports = router;