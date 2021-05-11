const validateSession = require("../middleware/validate-session");

const router = require("express").Router();
const Product = require("../db").import("../models/product");

// CREATE NEW PRODUCT//
router.post("/create", validateSession, function (req, res) {
    Product.create({
        name:  req.body.product.name,
        description: req.body.product.description,
        price: req.body.product.price,
        quantity: req.body.product.quantity,
        image_url: req.body.product.image_url
    })
    .then(
        function createSuccess(product) {
            res.json({
                product: product
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

// VIEW ALL PRODUCTS //
router.get("/", (req, res) => {
    Product.findAll()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;

// VIEW PRODUCT BY ID //
router.get("/:id", (req, res) => {
    let id = req.params.id;

    Product.findAll({
        where: {id: id}
    })
    .then(products => res.status(200).json(products))
    .catch(err => res.status(500).json({ error: err }))
});

// UPDATE PRODUCT //
router.put("/update/:id", validateSession, function (req, res) {
    const updateProduct = {
        name:  req.body.product.name,
        description: req.body.product.description,
        price: req.body.product.price,
        quantity: req.body.product.quantity,
        image_url: req.body.product.image_url
    };

    const query = { where: { id: req.params.id } };

    Product.update(updateProduct, query)
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json({ error: err }));
})

// DELETE PRODUCT //
router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id } };

    Product.destroy(query)
    .then(() => res.status(200).json({ message: "Product Removed"}))
    .catch((err) => res.status(500).json({ error: err }));
})

module.exports = router;