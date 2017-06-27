var convert = require('./convertToDollars.js');
var randomNum = require('./randomNumber.js');


function moduleThree(min, max) {
  convert(randomNum(min, max));
}

module.exports = {
  convert: convert,
  randomNum: randomNum
};
