function convertToDollars(number) {
  number = number.toFixed(2);
  //number = '$' + number;
  return number;
}

module.exports = convertToDollars;

// module.exports = {
//   convertToDollars: convertToDollars
// };
