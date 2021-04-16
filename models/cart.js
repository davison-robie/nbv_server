const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("cart", {
        user_id: {
            user_id: DataTypes.STRING,
            allowNull: false
        },
        status: {
            user_id: DataTypes.STRING,
            allowNull: false
        },
        cart_items: {
            user_id: DataTypes.STRING,
            allowNull: false
        }
    })
    return Cart;
}