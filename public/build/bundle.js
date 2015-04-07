(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var testModule = require('./test-module.js');

testModule.hi('我跑到浏览器去！');
testModule.antherFunction('xxxxxx');
},{"./test-module.js":2}],2:[function(require,module,exports){
function hi(text){
    console.log("你好， " + text);
}
function antherFunction(text) {
	hi(text);
}
module.exports = {
	hi            : hi,
	antherFunction: antherFunction
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvaW5kZXguanMiLCJwdWJsaWMvanMvdGVzdC1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgdGVzdE1vZHVsZSA9IHJlcXVpcmUoJy4vdGVzdC1tb2R1bGUuanMnKTtcclxuXHJcbnRlc3RNb2R1bGUuaGkoJ+aIkei3keWIsOa1j+iniOWZqOWOu++8gScpO1xyXG50ZXN0TW9kdWxlLmFudGhlckZ1bmN0aW9uKCd4eHh4eHgnKTsiLCJmdW5jdGlvbiBoaSh0ZXh0KXtcclxuICAgIGNvbnNvbGUubG9nKFwi5L2g5aW977yMIFwiICsgdGV4dCk7XHJcbn1cclxuZnVuY3Rpb24gYW50aGVyRnVuY3Rpb24odGV4dCkge1xyXG5cdGhpKHRleHQpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhpICAgICAgICAgICAgOiBoaSxcclxuXHRhbnRoZXJGdW5jdGlvbjogYW50aGVyRnVuY3Rpb25cclxufTsiXX0=
