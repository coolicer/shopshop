// var config = require('../config/config');
var User = require('../proxy').User
var redisCache = require('../lib/redisCache')

exports.index = function(req,res,next){
   var data = {
       title: '首页'
   };
  
   res.render('index', data);
};
