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
    MaxImgAddr:{
        type:DataTypes.STRING
    },
    MidImgAddr:{
        type:DataTypes.STRING
    },
    MinImgAddr:{
        type:DataTypes.STRING
    },
    ImgDesc:{
        type:DataTypes.STRING
    }
});
  return ProductImg;
};