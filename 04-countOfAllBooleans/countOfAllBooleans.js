function countOfAllBooleans(arr) {
  var count = 0;
  arr.forEach(element => {
    if ((typeof element) === "boolean") {
      count ++;
    }
  })
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;