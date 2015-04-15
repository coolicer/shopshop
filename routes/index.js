var express  = require('express');
var router   = express.Router();

/*controllers here*/
var home     = require('../controllers/home');
var registry = require('../controllers/registry');


module.exports = function(app) {
    // 首页
    router.get('/', home.index);

    // 注册
    router.get('/signup', registry.GET_signup)
    	  .post('/signup', registry.POST_signup);

    return router;
};
