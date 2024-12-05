// let a=[2,3,4,5,6];
// let result =a.reduce(function(max,currElement){
//     if(currElement>max){
//         max=currElement
//     }
//     return max

// },0)
// console.log(result)

// let a1=[1,2,3,4,5]
// let sumArray=a1.reduce((acc,currElement)=>{
//          acc+=currElement;
//          return acc;
// },0)
// console.log(sumArray);


// function flattenArray(arr) {
//     let result = [];
  
//     arr.forEach(element => {
//       if (Array.isArray(element)) {
//         result = result.concat(flattenArray(element)); // Recursively flatten
//       } else {
//         result.push(element); // Add non-array element directly
//       }
//     });
  
//     return result;
//   }
  
//   // Example usage:
//   console.log(flattenArray([1, [2, [3, 4]]])); // [1, 2, 3, 4]


//   let arr3= [1, [2, [3, [4]]]];
// console.log(arr3.flat(3));      // [1, 2, 3, [4]] (flattens 2 levels)
// console.log(arr3.flat(Infinity)); // [1, 2, 3, 4] (fully flattened)

// function filterByKeys(obj, keys) {
//     return keys.reduce((acc, key) => {
//       if (key in obj) acc[key] = obj[key];
//       return acc;
//     }, {});
//   }
  
//   // Example usage:
//   console.log(filterByKeys({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // { a: 1, c: 3 }
//   console.log(filterByKeys({ name: "Ali", age: 25, country: "Egypt" }, ['name'])); // { name: 'Ali' }

//   function allEven(nums) {
//     return nums.every(num => num % 2 === 0);
//   }
  
//   // Example usage:
//   console.log(allEven([2, 4, 6])); // true
//   console.log(allEven([1, 2, 3])); // false
//   console.log(allEven([])); // true (empty array returns true)

//   function findUser(users, name) {
//     return users.find(user => user.name === name);
//   }
  
//   // Example usage:
//   console.log(findUser([{ name: 'Alice' }, { name: 'Bob' }], 'Bob')); // { name: 'Bob' }
//   console.log(findUser([{ name: 'Alice' }, { name: 'Bob' }], 'Charlie')); // undefined

//   function filterFalsey(arr) {
//     return arr.filter(Boolean);
//   }
  
//   // Example usage:
//   console.log(filterFalsey([0, 1, false, 2, "", 3])); // [1, 2, 3]
//   console.log(filterFalsey([null, undefined, "Hello", 42, NaN])); // ["Hello", 42]
//   console.log(filterFalsey([])); // []


//   function doubleNumbers(nums) {
//     return nums.map(num => num * 2);
//   }
  
//   // Example usage:
//   console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
//   console.log(doubleNumbers([0, -1, 5])); // [0, -2, 10]
//   console.log(doubleNumbers([])); // []

//   function doubleNumbers(nums) {
//     return nums.map(num => num * 2);
//   }
  
//   // Example usage:
//   console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
//   console.log(doubleNumbers([0, -1, 5])); // [0, -2, 10]
//   console.log(doubleNumbers([])); // []\
// //   The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when you try to access a variable before it has been declared. 

//   function example() {
//     console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     console.log(b); // ReferenceError: Cannot access 'b' before initialization
  
//     let a = 5; // 'a' is in the TDZ until here
//     const b = 10; // 'b' is in the TDZ until here
  
//     console.log(a); // Outputs: 5
//     console.log(b); // Outputs: 10
//   }
  
//   example();


//   function hoistingExample() {
//     console.log(varVariable); // Outputs: undefined (due to hoisting)
//     console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
  
//     var varVariable = 'I am a var variable';
//     let letVariable = 'I am a let variable';
  
//     console.log(varVariable); // Outputs: I am a var variable
//     console.log(letVariable); // Outputs: I am a let variable
//   }
  
//   hoistingExample();
  

//   greet(); // Throws TypeError: greet is not a function

// const greet = function() {
//     console.log("Hello!");
// };



// function checkScope() {
//     if (true) {
//       var varVariable = 'I am a var variable';  // Function-scoped
//       let letVariable = 'I am a let variable';  // Block-scoped
//       const constVariable = 'I am a const variable';  // Block-scoped
  
//       console.log(varVariable);  // Outputs: I am a var variable
//       console.log(letVariable);   // Outputs: I am a let variable
//       console.log(constVariable); // Outputs: I am a const variable
//     }
  
//     console.log(varVariable);  // Outputs: I am a var variable (accessible outside the block)
    
//     // The following lines will throw ReferenceError because let and const are block-scoped
//     try {
//       console.log(letVariable);   // ReferenceError: letVariable is not defined
//     } catch (error) {
//       console.log(error.message); // Logs the error message
//     }
    
//     try {
//       console.log(constVariable); // ReferenceError: constVariable is not defined
//     } catch (error) {
//       console.log(error.message); // Logs the error message
//     }
//   }
  
//   checkScope();

//   function isPalindrome(str) {
//     // Convert the string to lowercase and remove non-alphanumeric characters
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Reverse the cleaned string
//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     // Check if the cleaned string is equal to its reversed version
//     return cleanedStr === reversedStr;
//   }
  
//   // Example usage:
//   console.log(isPalindrome("racecar")); // true
//   console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
//   console.log(isPalindrome("hello")); // false

//   function countVowels(str) {
//     // Regular expression to match vowels (case insensitive)
//     const vowelRegex = /[aeiou]/gi;
    
//     // Match the vowels in the string and return the count
//     const matches = str.match(vowelRegex);
    
//     // Return the number of vowels found or 0 if none
//     return matches ? matches.length : 0;
//   }
  
//   // Example usage:
//   console.log(countVowels("hello world")); // 3
//   console.log(countVowels("Programming is fun!")); // 6
//   console.log(countVowels("xyz")); // 0



//   function reverseString(str) {
//     // Split the string into an array of characters, reverse it, and join it back into a string
//     return str.split('').reverse().join('');
//   }
  
//   // Example usage:
//   console.log(reverseString("hello")); // "olleh"
//   console.log(reverseString("JavaScript")); // "tpircSavaJ"
//   console.log(reverseString("12345")); // "54321"


//   function swapKeysAndValues(obj) {
//     const swapped = {};
    
//     for (const key in obj) {
//       // Assign the value as the key and the key as the value
//       swapped[obj[key]] = key;
//     }
    
//     return swapped;
//   }
  
//   // Example usage:
//   console.log(swapKeysAndValues({a: 1, b: 2})); // {1: 'a', 2: 'b'}
//   console.log(swapKeysAndValues({name: 'Alice', age: 25})); // {'Alice': 'name', 25: 'age'}
//   console.log(swapKeysAndValues({x: 10, y: 20, z: 30})); // {10: 'x', 20: 'y', 30: 'z'}


//   function filterByKeys(obj, keys) {
//     const filteredObj = {};
  
//     for (const key of keys) {
//       if (key in obj) {
//         filteredObj[key] = obj[key];
//       }
//     }
  
//     return filteredObj;
//   }
  
//   // Example usage:
//   console.log(filterByKeys({a: 1, b: 2, c: 3}, ['a', 'c'])); // {a: 1, c: 3}
//   console.log(filterByKeys({name: 'Alice', age: 25, city: 'Wonderland'}, ['age', 'city'])); // {age: 25, city: 'Wonderland'}
//   console.log(filterByKeys({x: 10, y: 20, z: 30}, ['y', 'z', 'a'])); // {y: 20, z: 30}


//   function deepClone(obj) {
//     // Check if the input is an object or array
//     if (obj === null || typeof obj !== 'object') {
//       return obj; // Return primitive values as is
//     }
  
//     // Create an array or object to hold the cloned values
//     const clonedObj = Array.isArray(obj) ? [] : {};
  
//     // Iterate over the keys of the object/array
//     for (const key in obj) {
//       // Recursively clone each property
//       clonedObj[key] = deepClone(obj[key]);
//     }
  
//     return clonedObj;
//   }
  
//   // Example usage:
//   const original = {
//     a: 1,
//     b: { c: 2, d: [3, 4] },
//     e: [5, 6],
//   };
  
//   const cloned = deepClone(original);
//   console.log(cloned); // { a: 1, b: { c: 2, d: [3, 4] }, e: [5, 6] }
  
//   // Modify the clone and check if the original is unaffected
//   cloned.b.c = 10;
//   cloned.e.push(7);
  
//   console.log(original); // { a: 1, b: { c: 2, d: [3,



//   function countProperties(obj) {
//     // Use Object.keys to get an array of the object's own property names
//     return Object.keys(obj).length;
//   }
  
//   // Example usage:
//   console.log(countProperties({a: 1, b: 2})); // 2
//   console.log(countProperties({name: 'Alice', age: 25, city: 'Wonderland'})); // 3
//   console.log(countProperties({})); // 0

 

  function countProperties(obj){
    let k=Object.keys(obj).length;
    return k;
    

  }

  console.log(countProperties({a: 1, b: 2}))
 