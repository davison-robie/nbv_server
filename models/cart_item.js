const { DataTypes } = require("sequelize/types");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("cart_item", {
        product_id: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    })
    return CartItem;
}