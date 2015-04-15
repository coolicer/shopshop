var Sequelize = require('sequelize');
var User      = require('../models').User;
// var util = require('../lib/util');
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
        .finally( function(err, result){
            callback(err, result)
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
            .finally( function(err, result){
                callback(err, result)
            })
}