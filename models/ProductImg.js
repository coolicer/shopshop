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
        references : 'Product',
        referencesKey:'ProductId',
        comment: "references对应的是表名"
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