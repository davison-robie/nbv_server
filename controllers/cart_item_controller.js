const router = require("express").Router();
const CartItem = require("../db").import("../models/cart_item");
let validateSession = require("../middleware/validate-session");

// CREATE CART ITEM //
router.post("/create", function (req, res) {
    CartItem.create({
        product_id:  req.body.cart_item.product_id,
        cart_id: req.body.cart_item.cart_id,
        price: req.body.cart_item.price,
        quantity: req.body.cart_item.quantity
    })
    .then(
        function createSuccess(cart_item) {
            res.json({
                cart_item: cart_item
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

// VIEW ALL CART ITEMS //
router.get("/", (req, res) => {
    CartItem.findAll()
    .then(cart_items => res.status(200).json(cart_items))
    .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;

// VIEW CART ITEM BY ID //
router.get("/:id", (req, res) => {
    let id = req.params.id;

    CartItem.findAll({
        where: {id: id}
    })
    .then(cart_items => res.status(200).json(cart_items))
    .catch(err => res.status(500).json({ error: err }))
});

// UPDATE CART ITEM //
router.put("/update/:id", validateSession, function (req, res) {
    const updateCartItem = {
        product_id:  req.body.cart_item.product_id,
        cart_id: req.body.cart_item.cart_id,
        price: req.body.cart_item.price,
        quantity: req.body.cart_item.quantity
    };

    const query = { where: { id: req.params.id } };

    CartItem.update(updateCartItem, query)
    .then((cart_items) => res.status(200).json(cart_items))
    .catch((err) => res.status(500).json({ error: err }));
})

// DELETE CART ITEM //
router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id } };

    CartItem.destroy(query)
    .then(() => res.status(200).json({ message: "Cart Item Removed"}))
    .catch((err) => res.status(500).json({ error: err }));
})

module.exports = router;