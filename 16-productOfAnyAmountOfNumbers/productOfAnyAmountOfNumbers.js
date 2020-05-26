function productOfAnyAmountOfNumbers(...args) {
  var product = 1;
  args.forEach(arg => {
    product *= arg;
  });
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;