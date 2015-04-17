var Sequelize = require('sequelize')
var User      = require('../models').User
var config = require('../config/config')
var gravatar = require('gravatar')
var util = require('../lib/util')
User.sync();

/**
 * 根据用户ID，查找用户
 * @param {String} name 用户ID
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */
exports.findByIdOrEmail = function (name, email, callback) {
    User.findAll({
        where: Sequelize.or(
            { username : name },
            { email    : email }
        )
    })
        .then(function(result){
            callback(null,result)
        })
        .catch(function(err){
            callback(err)
        })
};

/**
 * 根据用户ID，查找用户
 * @param {String} ID 用户ID
 * @param {Function} callback 回调函数
 */
exports.getUserById = function (id, callback) {
    User.findOne({
            where: { UserId: id }
        })
            .then(function(result){
                callback(null,result)
            })
            .catch(function(err){
                callback(err)
            })
}


/**
 * 根据用户email，生成gravatar图像
 * @param {String} email 用户email
 * @param {String} 字符串 gravatar_url
 */
exports.createGravatarURLFromEmail = function(email){
    var customGravatarDefaultImage = config.customGravatarDefaultImage;
    if (customGravatarDefaultImage && customGravatarDefaultImage.indexOf('http') === -1) {
        customGravatarDefaultImage = config.site.host + config.site.port + config.customGravatarDefaultImage;
    }

    var options = {
        size: parseInt(config.profileImageDimension, 10) || 128,
        default: customGravatarDefaultImage || config.defaultGravatarImage || 'identicon',
        rating: 'pg'
    };

    if (!email) {
        email = '';
    }

    return gravatar.url(email, options, true);
}

/**
 * 根据用户email，查找email是否可用
 * @param {String} email 用户email
 * @param {Function} callback 回调函数
 */
exports.checkEmailAvailable = function (email,callback) {
    User.findAll({
        where: { email: email}
    })
        .then(function(result){
            result = result.length > 0 ? false : true
            callback(null, result)
        })
        .catch(function(err){
            callback(err)
        })
}

/**
 * 根据用户password，生成pass哈希
 * @param {String} password 用户password
 * @param {Function} callback 回调函数
 */
exports.hashPassword = function (password, callback) {
    util.bhash(password, '', callback)
}

/**
 * 添加新用户
 * @param {Object} userData 用户注册信息
 * @param {Function} callback 回调函数
 */
exports.createNewUser = function(userData, callback){
    User.build(userData)
        .save()
        .then(callback)
}





