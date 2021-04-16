const { DataTypes } = require("sequelize/types");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
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
    return Product;
}