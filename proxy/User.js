var Sequelize = require('sequelize');
var User = require('../models').User;
// var util = require('../lib/util');
User.sync();

/**
 * 根据用户ID，查找用户
 * @param {String} ID 用户ID
 * @param {Function} callback 回调函数
 */
 
module.exports = {
    getUserById: function (UserId ,callback) {
        User.findOne({
            where: { UserId: UserId }
        })
            .then(function(result){
                callback(null,result)
            })
            .catch(function(err){
                callback(err,null)
            })
    }
}