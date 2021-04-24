// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const GuestUser = sequelize.define("guest_user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return GuestUser;
}