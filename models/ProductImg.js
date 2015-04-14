module.exports = function(sequelize, DataTypes) {
  var ProductImg = sequelize.define('ProductImg', {
    ProductImgId: {
        type: DataTypes.BIGINT,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    ProductId:{
        type:DataTypes.BIGINT,
        allowNull: false,
        references : 'Product',  // 注意这个是表名
        referencesKey:'ProductId'
    } ,
    maxImgAddr:{
        type:DataTypes.STRING
    },
    midImgAddr:{
        type:DataTypes.STRING
    },
    minImgAddr:{
        type:DataTypes.STRING
    },
    imgDesc:{
        type:DataTypes.STRING
    }
});
  return ProductImg;
};