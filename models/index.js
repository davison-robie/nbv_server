const AdminUser = require("./admin_user");
const GuestUser = require("./guest_user");
const Cart = require("./cart");
const CartItem = require("./cart_item");
const Product = require("./product");
const Order = require("./order");

//Setup Associations
GuestUser.hasOne(Cart);
Cart.belongsTo(GuestUser);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

module.exports = {
    AdminUser,
    GuestUser,
    Cart,
    CartItem,
    Product,
    Order
};