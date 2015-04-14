module.exports = function(sequelize, DataTypes) {
    var Placard = sequelize.define('Placard', {
        PlacardId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        placardTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placardContent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issueDate: {
            type: DataTypes.DATE
        },
        expireDate: {
            type: DataTypes.DATE
        }
    });
    return Placard;
}