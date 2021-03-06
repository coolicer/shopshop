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
        references : 'ProductType',
        referencesKey:'ProductTypeId',
        comment: "references对应的是表名"
    } ,
    productName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    productDesc:{
        type:DataTypes.STRING
    },
    mount:{
        type:DataTypes.BIGINT
    },
    price:{
        type:DataTypes.DECIMAL(10,2)
    },
    isSale:{
        type:DataTypes.BOOLEAN
    },
    isVailed:{
        type:DataTypes.BOOLEAN
    }
});
  return Product;
};