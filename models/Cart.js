module.exports = function(sequelize, DataTypes) {
   var Cart = sequelize.define('Cart', {
        CartId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 'User',
            referencesKey: 'UserId'
        },
        ProductId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: 'Product',
            referencesKey: 'ProductId'
        },
        number: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2)
        }
    });
    return Cart;
};