var sequence = [];
function fibonacciGenerator(n) {
  if (n == 1) {
    sequence = [0];
    return sequence;
  } else if (n === 2) {
    sequence = [0,1];
    return sequence;
  } else {
    var first = 0;
    sequence.push(first);
    var second = 1;
    sequence.push(second);
    for (var i = 3; i <= n; i++) {
      var sum = first + second;
      sequence.push(sum);
      first = second;
      second = sum;
    }
    return sequence;
  }
}

fibonacciGenerator(1);
