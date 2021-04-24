const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Order;
}