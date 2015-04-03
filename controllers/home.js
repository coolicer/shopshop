// var config = require('../config');

exports.index = function(req,res,next){
   var data = {
       title: '首页',
       keyword: 'xxxxx'
   };
   res.render('index',data);
};
