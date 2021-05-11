require("dotenv").config();
let express = require("express");
let app = express();
const sequelize = require("./db");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { resolve } = require("path");

let guest_user = require("./controllers/guest_user_controller");
let product = require("./controllers/product_controller");
let cart = require("./controllers/cart_controller");
let cart_item = require("./controllers/cart_item_controller");
let order = require("./controllers/order_controller");

// sequelize.sync();
sequelize.sync({force: true});
app.use(require('./middleware/headers'));                                    
app.use(express.json());
// app.use(express.static(process.env.STATIC_DIR));

app.use("/guest_user", guest_user);
app.use("/product", product);
app.use("/cart", cart);
app.use("/cart_item", cart_item);
app.use("/order", order);

// app.get("/", (req, res) => {
//     res.send("Hey Stripe devs!");
// })

app.get("/public-keys", (req, res) => {
    res.send({ key: process.env.STRIPE_PUBLIC_KEY});
})

app.listen(3000, function(){
    console.log("App is listening on port 3000");
})