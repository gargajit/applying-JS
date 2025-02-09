var output = [];
var i = 1;

// functioon that returns the array from 1 - 100
// if the number is divisble only by 3 it will add the string fizz in the array
// if the number is divisible only by 5 it will add the string buzz in the array
// if the number is divisble by both 3 and 5 then the string fizzbuzz will be added to the string
function fizzbuzz() {

  while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("fizzbuzz");
    } else if (i % 3 === 0) {
        output.push("fizz");
    } else if (i % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(i);
    }
    i++;
  }
  return output;
}

fizzbuzz();
