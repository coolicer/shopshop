var Sequelize = require('sequelize');
var User = require('../models').User;
// var util = require('../lib/util');
User.sync();

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
