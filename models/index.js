var Sequelize = require('sequelize');
var config    = require('../config/config').database;
var fs  = require("fs");
var path = require("path");
var db = {};
// initialize database connection
var sequelize = new Sequelize(
    config.name,
    config.username,
    config.password,
    config.options
);
// import all model files
fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== 'README.md');
    })
    .forEach(function(file) {
      var model = sequelize["import"](path.join(__dirname, file));
      db[model.name] = model;
    });

// export connection
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;