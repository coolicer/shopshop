var config = require('../config/config');
var redis = require('redis');

var client = redis.createClient(config.redisOptions.port, config.redisOptions.host);

exports = module.exports = client;
