var uuid       = require('uuid');
var eventproxy = require('eventproxy');
var validator  = require('validator');
var User = require('../proxy').User;
/*
 *  action: GET
 *  注册页
*/
exports.GET_signup = function(req,res,next){
   var data = {
       title: '注册'
   };
   res.render('registry/signup',data);
};

/*
 *  action: POST
 *  注册页
*/
exports.POST_signup = function(req,res,next) {
	var _POST     = req.body
	var loginname = _POST['UserId']
	var password  = _POST['password']
	var _password = _POST['_password']
	var email     = _POST['email']
	var proxy     = new eventproxy()

	/*
	 * 处理异常
	*/
	proxy.fail(next)
	proxy.on('propertyError', function(msg) {
		res.status(422)
		res.render('registry/signup', {error: msg, status: 'fail'})
	})

	if( [loginname, password, _password, email].some( function(item){ return item === ''; })) {
		proxy.emit('propertyError', '信息不完整。');
        return;
	}
	if (loginname.length < 5) {
        proxy.emit('propertyError', '用户名至少需要5个字符。');
        return;
    }
    if (!util.validateId(loginname)) {
        return proxy.emit('propertyError', '用户名不合法。');
    }
    if (!validator.isEmail(email)) {
        return proxy.emit('propertyError', '邮箱不合法。');
    }
    if (password !== _password) {
        return proxy.emit('propertyError', '两次密码输入不一致。');
    }

    User.findByIdOrEmail(loginname, email, function(err,user){
        if(err) return next(err);
        if(user.length > 0){
            proxy.emit('propertyError','用户名或邮箱已被使用。');
            return;
        }
        util.bhash(password, '', proxy.done(function(passhash){
        	console.log(passhash)
        }));
    });

}