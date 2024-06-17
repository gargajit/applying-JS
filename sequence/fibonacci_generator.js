var sequence = [];
function fibonacciGenerator(n) {
  var first = 0;    
  sequence.push(first);    //first value
  var second = 1;    
  sequence.push(second);  //second value
  for (let i = 3; i <= n; i++) {
    var sum = first + second;
    sequence.push(sum);    //next value
    first = second;      // first will now contain value of second
    second = sum;        // second will now contain value of sum
  }
  // return the updated array
  return sequence;
}

// function call
fibonacciGenerator(6);
