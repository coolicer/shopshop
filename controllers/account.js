var uuid       = require('uuid')
var validator  = require('validator')
var User       = require('../proxy').User
var util       = require('../lib/util')
var async      = require('async')
var config     = require('../config/config')
/*
 *  action: GET
 *  注册页
**/
exports.GET_signup = function(req,res,next){
   var data = {
       title: '注册'
   }
   res.render('account/signup', data)
};

/*
 *  action: POST
 *  注册页
**/
exports.POST_signup = function(req,res,next) {
    var _POST     = req.body
    var username  = validator.trim(_POST['username'])
    var password  = validator.trim(_POST['password'])
    var _password = validator.trim(_POST['_password'])
    var email     = validator.trim(_POST['email'])
        email     = validator.escape(email)

    var data = {
        username  : username,
        password  : password,
        _password : _password,
        email     : email
    }
    
    // 1 验证数据正确性
    isDataValid(data, function(err) {
        console.log('err->', err)
        if (err)  {
            return res.render('account/signup',{
                status: 'fail',
                message: err
            })
        }
        var gravatar = User.createGravatarURLFromEmail(email)
        var userData = {
            username   : data.username,
            email      : data.email,          
            avatar_url : gravatar,
            password   : '',
            phone      : '',
            isActived  : 0,
            amount     : 0
        }
        // 2 生成passhash并添加新用户
        async.waterfall([
            function(next) {
                User.hashPassword(data.password, next)
            },
            function(hash, next) {
                userData.password = hash
                User.createNewUser(userData, next())
            }
        ], function(err){
            if(err){
                return next(err)
            }
            return res.render('account/signup', {
                    status: 'ok', 
                    message: '欢迎加入 ' + config.site.name + '！请登录邮箱，点击里面的链接来激活您的帐号。'
                })
        })

    })

	function isDataValid(userData, callback) {
        async.parallel({
            emailValid: function(cb) {
                if(!util.isEmailValid(userData.email)) {
                    cb('邮箱格式不正确')
                }
            },
            userNameValid: function(cb) {
                var len = userData.username.length
                if(len < 5 || !util.isUserNameValid(userData.username)) {
                   cb('用户名格式不正确')
                }
            },
            passwordValid: function(cb) {
                if(!util.isPasswordValid(userData.password)) {
                    cb('密码格式不正确')
                }
            },
            checkPasswordLength: function(cb) {
                if(userData.password.length < 8) {
                    cb('密码长度必须大于8位数字')
                }
            },
            comparePassword: function(cb){
                if(userData.password !== userData._password) {
                    cb('两次输入密码不相等')
                }
            },
            emailAvailable: function(cb) {
                User.checkEmailAvailable(userData.email, function(err, available) {
                    if (err) {
                        cb(err);
                    }
                    cb( !!available ? null : '邮箱已经使用')
                })
            }
        }, callback);
    }
}

/*
 *  action: get
 *  登录页
**/
exports.GET_login = function() {}

/*
 *  action: post
 *  登录页
**/
exports.POST_login = function() {}






