// Coding Challenge
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


const printForecast = function (arr) {
  try {
    if (arr.length === 0) console.warn("No data in the array!");

    let str = "";
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1)
        str = str.concat(`... ${arr[i]}°C in ${i + 1} days `);
      else str = str.concat(`... ${arr[i]}°C in ${i + 1} days ...`);
    }
    console.log(str);
  } catch (error) {
    console.error("Failed to provide an array.");
  }
};

printForecast([17, 21, 23]); // ... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ...
printForecast([12, 5, -5, 0, 4]); // ... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ...
printForecast([17]); // ... 17°C in 1 days ...
printForecast([]); // Warning: No data in the array!
printForecast(); // Error: script.js:180 Failed to provide an array.
