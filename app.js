require("dotenv").config();
let express = require("express");
let app = express();
const sequelize = require("./db");

let guest_user = require("./controllers/guest_user_controller");
let admin_user = require("./controllers/admin_user_controller");
let product = require("./controllers/product_controller");
let cart = require("./controllers/cart_controller");
let cart_item = require("./controllers/cart_item_controller");
let order = require("./controllers/order_controller");

sequelize.sync();
//sequelize.sync({force: true});
app.use(require('./middleware/headers'));
                                                                                       
app.use(express.json());

app.use("/guest_user", guest_user);
app.use("/admin_user", admin_user);
app.use("/product", product);
app.use("/cart", cart);
app.use("/cart_item", cart_item);
app.use("/order", order);

app.listen(3000, function(){
    console.log("App is listening on port 3000");
})