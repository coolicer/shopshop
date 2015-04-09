// var config = require('../config/config');
var User = require('../proxy').User

exports.index = function(req,res,next){
   var data = {
       title: '首页'
   };
   // User.getUserById(1, function(err,result){
   //      console.log('result',result)
   // })
   res.render('index',data);
};
