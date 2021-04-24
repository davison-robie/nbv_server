const router = require("express").Router();
const Order = require("../db").import("../models/order");
let validateSession = require("../middleware/validate-session");

// CREATE NEW ORDER //
router.post("/create", function (req, res) {
    Order.create({
        user_id: req.body.order.user_id,
        cart_id: req.body.order.cart_id,
        status: req.body.order.status,
        total: req.body.order.total,
        first_name: req.body.order.first_name,
        last_name: req.body.order.last_name,
        mobile: req.body.order.mobile,
        email: req.body.order.email,
        address1: req.body.order.address1,
        address2: req.body.order.address2,
        city: req.body.order.city,
        zip: req.body.order.zip,
        country: req.body.order.country
    })
    .then(
        function createSuccess(order) {
            res.json({
                order: order
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

// VIEW ORDER BY ID //
router.get("/:id", (req, res) => {
    let id = req.params.id;

    Order.findAll({
        where: {id: id}
    })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.status(500).json({ error: err }))
});

// UPDATE ORDER //
router.put("/update/:id", validateSession, function (req, res) {
    const updateOrder = {
        user_id: req.body.order.user_id,
        cart_id: req.body.order.cart_id,
        status: req.body.order.status,
        total: req.body.order.total,
        first_name: req.body.order.first_name,
        last_name: req.body.order.last_name,
        mobile: req.body.order.mobile,
        email: req.body.order.email,
        address1: req.body.order.address1,
        address2: req.body.order.address2,
        city: req.body.order.city,
        zip: req.body.order.zip,
        country: req.body.order.country
    };

    const query = { where: { id: req.params.id } };

    Order.update(updateOrder, query)
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json({ error: err }));
})

// DELETE ORDER //
router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id } };

    Order.destroy(query)
    .then(() => res.status(200).json({ message: "Order Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
})

module.exports = router;