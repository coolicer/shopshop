module.exports = function(sequelize, DataTypes) {
  var ProductType = sequelize.define('ProductType', {
    ProductTypeId: {
        type: DataTypes.BIGINT,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    typeName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    typeDesc:{
        type:DataTypes.STRING
    },
    isLeaf:{
        type:DataTypes.BOOLEAN
    },
    prentId:{
        type:DataTypes.BIGINT
    },
    path:{
        type:DataTypes.STRING
    },
    creater:{
        type: DataTypes.STRING
    },
    updater:{
        type:DataTypes.STRING
    }
});
  return ProductType;
};