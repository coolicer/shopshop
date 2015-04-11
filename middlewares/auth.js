module.exports = {
    // 检查redis是否工作
    checkRedis: function(req,res,next) {
        if( !req.session ) {
            return next( new Error('oh no, You do not have a redis.') )
        }
        next();
    }
}