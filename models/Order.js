module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define('Order', {
        OrderId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : 'User',
            referencesKey:'UserId',
            onDelete: 'CASCADE'
        },
        ReceiverName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        PostCode: {
            type: DataTypes.STRING
        },
        OrderTag: {
            type: DataTypes.INTEGER   //0：未发货；1：已发货；其他待定
        },
        OrderMark: {
            type: DataTypes.STRING
        }
    });
    return Order;
};