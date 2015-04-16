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
        username : username,
        password : password,
        email    : email
    }
    
    // 1 验证数据正确性
    isDataValid(data, function(err) {
        if (err)  {
            return next(err)
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
            emailValid: function(next) {
                if (userData.email) {
                    next(!util.isEmailValid(userData.email) ? new Error('[[error:invalid-email]]') : null);
                } else {
                    next();
                }
            },
            userNameValid: function(next) {
                next((!util.isUserNameValid(userData.username)) ? new Error('[[error:invalid-username]]') : null);
            },
            passwordValid: function(next) {
                if (userData.password) {
                    next(!util.isPasswordValid(userData.password) ? new Error('[[error:invalid-password]]') : null);
                } else {
                    next();
                }
            },
            emailAvailable: function(next) {
                if (userData.email) {
                    User.checkEmailAvailable(userData.email, function(err, available) {
                        if (err) {
                            return next(err);
                        }
                        next(!available ? new Error('[[error:email-taken]]') : null);
                    });
                } else {
                    next();
                }
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






