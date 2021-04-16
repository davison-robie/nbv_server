module.exports = (sequelize, DataTypes) => {
    const AdminUser = sequelize.define("admin_user", {
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
    return AdminUser;
}