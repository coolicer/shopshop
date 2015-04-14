module.exports = function(sequelize, DataTypes) {
    var OrderDetail = sequelize.define('OrderDetail', {
        OrderDetailId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        OrderId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references : 'Order',
            referencesKey:'OrderId',
            onDelete: 'CASCADE'
        },
        ProductId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references : 'Product',
            referencesKey:'ProductId'
        },
        productPrice: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        productCount: {
            type: DataTypes.INTEGER
        }
    });
    return OrderDetail;
};