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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvaW5kZXguanMiLCJwdWJsaWMvanMvdGVzdC1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgdGVzdE1vZHVsZSA9IHJlcXVpcmUoJy4vdGVzdC1tb2R1bGUuanMnKTtcblxuXG50ZXN0TW9kdWxlLmhpKCfmiJHot5HliLDmtY/op4jlmajljrvvvIEnKTtcbnRlc3RNb2R1bGUuYW50aGVyRnVuY3Rpb24oJ3h4eHh4eCcpOyIsImZ1bmN0aW9uIGhpKHRleHQpe1xuICAgIGNvbnNvbGUubG9nKFwi5L2g5aW977yMIFwiICsgdGV4dCk7XG59XG5mdW5jdGlvbiBhbnRoZXJGdW5jdGlvbih0ZXh0KSB7XG5cdGhpKHRleHQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGhpICAgICAgICAgICAgOiBoaSxcblx0YW50aGVyRnVuY3Rpb246IGFudGhlckZ1bmN0aW9uXG59OyJdfQ==
