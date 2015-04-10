// https://github.com/cnodejs/nodeclub/blob/master/common/cache.js

var redis = require('./redis')
var _     = require('lodash')

module.exports = {
    get: function(key, callback) {
        redis.get(key, function(err, data){
          if(err){
             return callback(err)
          }
          if(!data){
             return callback()
          }
          data = JSON.parse(data)
          callback(null, data)
        })
    },
    set: function(key, value, time, callback) {
        if(typeof time === 'function'){
           callback = time
           time = null
        }
        callback = callback || _.noop
        value = JSON.stringify(value)
        if(!time){
            redis.set(key,value, callback)
        } else {
            redis.setex(key, time, value, callback)
        }
    }
}
