module.exports = function(sequelize, DataTypes) {
    var Placard = sequelize.define('Placard', {
        PlacardId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        PlacardTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PlacardContent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        IssueDate: {
            type: DataTypes.DATE
        },
        ExpireDate: {
            type: DataTypes.DATE
        }
    });
    return Placard;
}