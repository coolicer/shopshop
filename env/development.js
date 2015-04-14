module.exports = {
    debug: true,
    site: {
        name:'shopshop',
        host:'localhost',
        port: 3000
    },
    session_secret: 'shopshop',
    auth_cookie_name:'UserId',
    database:{
        name: 'shopshop',
        username: 'root',
        password: '123456',
        options:{
            timezone : "+08:00",
            host: '127.0.0.1',
            dialect: 'mysql',
            pool: {
                maxConnections : 20,    // 最大连接数
                minConnections : 0,
                maxIdleTime    : 30000  // 最大空闲时间
            },
        }
    },
    redisOptions:{
        host: '127.0.0.1',
        port: 6379
    },
    mail_opts:{
        user: 'services@shopshop.com',
        apiKey:'key-ada202eb12f91c1b4429d3fc861c4dbe',
        domain:'coolicer.com'
    }
};
