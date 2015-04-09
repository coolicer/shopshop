module.exports = function(sequelize, DataTypes) {
  var ProductType = sequelize.define('ProductType', {
    ProductTypeId: {
        type: DataTypes.BIGINT,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    TypeName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    TypeDesc:{
        type:DataTypes.STRING
    },
    TsLeaf:{
        type:DataTypes.BOOLEAN
    },
    PrentId:{
        type:DataTypes.BIGINT
    },
    Path:{
        type:DataTypes.STRING
    },
    Creater:{
        type: DataTypes.STRING
    },
    Updater:{
        type:DataTypes.STRING
    }
});
  return ProductType;
};