function fizzBuzz(start, end) {
  var arr = [];
  var current = start;
  while (current != end + 1) {
    if (current % 3 == 0 && current % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (current % 3 == 0) {
      arr.push("Fizz");
    } else if (current % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(current);
    }
    current++;
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;