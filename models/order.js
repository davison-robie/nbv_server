const { DataTypes } = require("sequelize/types");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        user_id: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Total: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.number,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Order;
}