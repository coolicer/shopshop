var express = require('express');
var router = express.Router();

/*controllers here*/
var home = require('../controllers/home');


module.exports = function(app) {
    // 首页
    router.get('/', home.index);

    return router;
};