const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("cart_item", {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return CartItem;
}