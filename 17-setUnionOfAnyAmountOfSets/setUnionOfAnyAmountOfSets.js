function setUnionOfAnyAmountOfSets(...args) {
  var union = new Set();
  for (let i of args) {
    i.forEach(element => {
      if (!union.has(element)) {
        union.add(element);
      }
    })
  }
  return union;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;