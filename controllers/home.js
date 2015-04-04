// var config = require('../config');

exports.index = function(req,res,next){
   var data = {
       title: '首页'
   };
   res.render('index',data);
};
