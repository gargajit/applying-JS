function fibonacciGenerator(n) {
    if (n <= 0) {
        console.log("Wrong Input");
        return;
    }
    var fib_list = [];

    if (n === 1) {
        fib_list = [0];
    }
    else if (n === 2) {
        fib_list = [0, 1];
    }
    else {
        fib_list = [0, 1];
        for (var i = 2; i < n; i++) {
            fib_list.push(fib_list[i-1] + fib_list[i-2]);
        }
    }
    console.log(fib_list);
}
