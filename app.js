var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var auth = require('./middlewares/auth');
var swig = require('swig');
var app = express();

// 设置
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views','themes/nodeshop-theme-default/');

app.set('view cache', false);
swig.setDefaults({ cache: false });

// 中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.session_secret));
app.use('/public',express.static(path.join(__dirname, 'public/')));

// 使用redis做缓存
app.use(session({
    store: new RedisStore(config.redisOptions || {}),
    secret: config.session_secret,
    resave: false,
    saveUninitialized: true
}));

// 自定义中间件
app.use(auth.checkRedis);

// 加载路由
var routes = require('./routes/index')(app);

// 注册路由
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
