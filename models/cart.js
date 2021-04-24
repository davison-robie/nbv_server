const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("cart", {
        user_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cart_items: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Cart;
}