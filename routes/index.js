var express  = require('express');
var router   = express.Router();

/*controllers here*/
var home     = require('../controllers/home');
var account = require('../controllers/account');


module.exports = function(app) {
    // 首页
    router.get('/', home.index);

    // 注册
    router.get('/signup', account.GET_signup)
    	  .post('/signup', account.POST_signup);

    return router;
};
