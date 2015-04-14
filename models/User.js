module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        UserId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING
        },
        passWord: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(4)        //male表示男性，female表示女性
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING
        },
        avatar_url:{
            type: DataTypes.STRING
        },
        isActived: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2)  //用户消费总额
        },
        authorizeTag: {
            type: DataTypes.INTEGER         //0：代表注册用户；1：代表系统管理员；其他权限待定
        },
        retrieve_key:{
            type: DataTypes.STRING
        },
        retrieve_time:{
            type: DataTypes.DATE
        }
    });
    return User;
};
