function fizzBuzz(input) {
  if (input % 5 === 0 && input % 3 === 0) {
    return "fizzBuzz";
  } else if (input % 5 === 0) {
    return "buzz";
  } else if (input % 3 === 0) {
    return "fizz";
  } else {
    return input;
  }
}
fizzBuzz(3);
module.exports = fizzBuzz;
