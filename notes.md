# Type Coercion

`Examples:`
```js
5 + "5" 
//Output 55

10 - "2" 
//Output 8
"10" - 2 
//Output 8

"10" * 2 
//Output 20
10 * 5 
//Output 50

"10" / 2 
//Output 5
10 / "2"
//Output 5

5 + "5" - 10 
//Output 45 ("55" - 10 : 45)

20 - 8 - 2 + "0" - 50
//Output 50 (10 + "0" - 50 : "100" - 50 : 50)
```


# Functions

**1. FUNCTION DECLARATION**
```js
function calcAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const year = 1999; //prompt("Enter your birth year:");
const age = calcAge(year);
console.log(`Your age is ${age}`);
```

**2. FUNCTION EXPRESSION**
```js
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const age = calcAge(2000);
console.log(`Your age is ${age}`);
```

**3. FUNCTION EXPRESSION => ARROW FUNCTION**
```js
const calcAge = birthYear => 2025 - birthYear;

const age = calcAge(2000);
console.log(`Your age is ${age}`);
```

`Single Parameter`:
```js
const yearsUntilRetirement = birthYear => { //single parameter
    const age = 2025 - birthYear;
    return 60 - age;
}

const yearsLeft = yearsUntilRetirement(1991);
console.log(`You have ${yearsLeft} years left until retirement.`);
```

`Multiple Parameters`:
```js
const yearsUntilRetirement = (birthYear, firstName) => {    //multiple parameters
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    return `${firstName} has ${retirement} years until retirement.`
}

const checkRetirement = yearsUntilRetirement(1991, 'Ajit');
console.log(checkRetirement);
```



# Arrays
```js
const myDetails = [
"Ajit", 
"Garg", 
2025 - 1991, 
'developer', 
['HTML', 'CSS', 'JS', 'Node', 'Express']
];
```

## Array Methods
```js
const friends = ['Krishna', 'Arjun', 'Rama'];
```
### Add Elements
- **push method**: adds new element at the end of the array and it does returns the length of the new array.
```js
let newLength = friends.push('Vibhishan');
console.log(friends);  // ['Krishna', 'Arjun', 'Rama', 'Vibhishan']
console.log(newLength); // 4
```
- **unshift method**: adds new element at the beginning of the array and it also does return the length of the new array.
```js
newLength = friends.unshift("Kabir");
console.log(friends);  // ['Kabir', 'Krishna', 'Arjun', 'Rama', 'Vibhishan']
console.log(newLength);  // 5
```
### Remove Elements
- **pop method**: removes the last element of the array and it returns the popped element.
```js
const poppedName = friends.pop();
console.log(friends);  // ['Kabir', 'Krishna', 'Arjun', 'Rama']
console.log(poppedName);  // Vibhishan
```
- **shift method**: removes the first element of the array and it also returns the popped element.
```js
const removeFirstName = friends.shift();
console.log(friends);  // ['Krishna', 'Arjun', 'Rama']
console.log(removeFirstName);  // Kabir
```
### indexOf method
tells us at which position (zero-based) is the given element is. If the element is not in the list, it will return -1
```js
console.log(friends.indexOf("Rama"));  // 2
```
### includes method 
(came in ES6) returns boolean value true if the element is in the array else false.
```js
console.log(friends.includes("Arjun")); // True
console.log(friends.includes("Kabir")); // False
```

# Objects
```js
const myDetails = {
firstName: 'Ajit',
lastName: 'Garg',
age: 34,
profession: 'developer',
skills: ['HTML', 'CSS', 'JS', 'Node', 'Express'],
};
```
This is the simplest way of writing a JS object. There are other ways too.
`Note:` The keys are also called the properties of the object.


**How to retrieve data**
```js
// Dot Notation
console.log(myDetails.profession);  // developer
```
The (.) **dot** is an *operator* that will go to the `myDetails` object and look for the `profession` property.

```js
// Bracket Notation
console.log(myDetails['profession']);  // developer
```

**When to use Dot Notation and Bracket Notation**
Only when we need to first compute the property name should we use `Bracket Notation`. Example 1:
```js
const nameKey = 'Name';
console.log(myDetails['first' + nameKey]);  // Ajit
console.log(myDetails['last' + nameKey]);  // Garg
```
Example 2:
```js
const interestedIn = prompt("What do you want to know about Ajit? Choose between firstName, lastName, age, profession, skills");  // user enters profession
console.log(`${interestedIn}:`, myDetails[interestedIn]);  // profession: developer
```
If you try to use dot notation in `Example 2`, it will return **`undefined`** but instead of looking for the value stored in the const `interestedIn`, it treats it as a property name but there is no such property defined inside the object `myDetails`.

**How to add new property**
```js
// Dot Notation
myDetails.country = 'India';

// Bracket Notation
myDetails['hometown'] = 'Lucknow';

console.log(myDetails);
{
    "firstName": "Ajit",
    "lastName": "Garg",
    "age": 34,
    "profession": "developer",
    "skills": ["HTML", "CSS", "JS", "Node", "Express"],
    "country": "India",
    "hometown": "Lucknow"
}
```

Function Expression works fine in the JS Object but not function declaration.
Example:
```js
const myDetails = {
    firstName: 'Ajit',
    lastName: 'Garg',
    birthYear: 1991,
    profession: 'developer',
    skills: ['HTML', 'CSS', 'JS', 'Node', 'Express'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        return 2025 - birthYear;
    }
};
```
The key `calcAge` has a *function value*.
The function inside the Object is called **Method**.

```js
// Dot Notation
console.log(myDetails.calcAge(1991));   // 34
// Bracket Notation
console.log(myDetails['calcAge'](1991));   // 34
```

As we already have the `birthYear` as a *property* in the object. 
To access it in the method, JS gives us access to a special variable called **`this`**.

**this** variable equals to the object on which the method is called. 
or
**this** variable equals to the object calling the method.


(myDetails object is calling the method)
```js
calcAge: function() {
        console.log(this); 
        return 2025 - this.birthYear;
    }

// Output on console.log(this);
{
    "firstName": "Ajit",
    "lastName": "Garg",
    "birthYear": 1991,
    "profession": "developer",
    "skills": [
        "frontend",
        "Express"
    ],
    "hasDriversLicense": true
}
```

**this** will allow us to read the birthYear from this object itself without having to pass it in as a parameter into the method.
```js
const myDetails = {
    firstName: 'Ajit',
    lastName: 'Garg',
    birthYear: 1991,
    profession: 'developer',
    skills: ['frontend', 'Express'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2025 - birthYear;
    // }
    calcAge: function() {
        return 2025 - this.birthYear;
    }
};

console.log(myDetails.calcAge());   // 34
```
