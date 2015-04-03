exports.signup = function(req,res,next){
   var data = {
       title: '注册'
   };
   res.render('registry/signup',data);
};
