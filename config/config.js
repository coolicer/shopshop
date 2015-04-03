module.exports = {
    debug: true,
    name:'nodeshop',
    host:'localhost',
    port:'3000',
    session_secret: 'nodeshop',
    auth_cookie_name:'id',
    database:{
        name: 'nodeshop',
        username: 'root',
        password: '123456',
        options:{
            timezone : "+08:00",
            host: '127.0.0.1',
            dialect: 'mysql'
        }
    },
    mail_opts:{
        user: 'services@nodeshop.com',
        apiKey:'key-ada202eb12f91c1b4429d3fc861c4dbe',
        domain:'coolicer.com'
    },
    theme: 'default'
};