module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    ProductId: {
        type: DataTypes.BIGINT,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    ProductTypeId:{
        type:DataTypes.BIGINT,
        allowNull: false,
        references : 'ProductType', // 注意这个是表名
        referencesKey:'ProductTypeId'
    } ,
    ProductName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    ProductDesc:{
        type:DataTypes.STRING
    },
    mount:{
        type:DataTypes.BIGINT
    },
    price:{
        type:DataTypes.DECIMAL(10,2)
    },
    IsSale:{
        type:DataTypes.BOOLEAN
    },
    IsVailed:{
        type:DataTypes.BOOLEAN
    }
});
  return Product;
};