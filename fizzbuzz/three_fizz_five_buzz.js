var output = [];
var i = 1;

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
