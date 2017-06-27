function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = getRandom;

// module.exports = {
//   getRandom: getRandom
// };
