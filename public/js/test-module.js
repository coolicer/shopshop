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