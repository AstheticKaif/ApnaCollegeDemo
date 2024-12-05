//CONCEPTS++
let i = 3;
console.log("i " + 3);
console.log(typeof ("i " + 3));
console.log("i ", 3);
console.log(typeof ("i ", 3));
console.log(`i ${i}`);
console.log(typeof `i ${i}`);
//for-of-loop-->on array and string
let arr = [2, 3, 4, 3, 5];
let str = `   kaif molla    `;
let str1 = str.trim(str);

console.log(str1);
console.log(str1.charAt(1));
for (let val of arr) {
  console.log(val);
}
for (let val of str) {
  console.log(val);
}

//for-in-loop--->obj
let obj = {
  name: "kai",
  age: 19,
};

for (let key in obj) {
  console.log(obj[key]);
}

//template litetral --->  a way to have embedded expression in strings-->`    `
//string interpolation--->to create a string by doing substitution of placeholder

// let k= (b)=>{
//     return a;

// }
// console.log(k)
// function b(){
//     return "akif";
// }

//for-each-loop i array-->method
let arr1 = [2, 3, 4, , 5];
arr1.forEach(function printVal(val, index, arr) {
  // val at each index
  console.log(val, index, arr);
});

//higher order function-->those function which will either return a function or take function as para meter

let arr2 = [2, 3, 4, 5];
let s = [];
arr2.forEach((val) => {
  s.push(val * val);
  return s;
});
console.log(s);

let nums = [167, 52, 39];
let calcSquare = (num) => {
  console.log(num * num);
};
nums.forEach(calcSquare);
console.log("\n");

//map similar to forEach but map returns a new array
let nums1 = [167, 52, 391];
let newArr = nums1.map((val) => {
  return val;
});

console.log(newArr);

//filter-->array ke element ko filetr out krna based on some condition
let A = [1, 2, 3, 4, 5, 6, 71];
let evenArr = A.filter((val) => {
  return val % 2 == 0;
});
console.log(evenArr);

//reduce

let arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((prev, curr) => {
  return prev + curr;
});

console.log("sum is ", sum); //10

//30
let b = [2, 3, 4, 5];
const allEven = b.every((n) => {
  return n % 2 == 0;
});
console.log(allEven);

//or
function alleven(nums) {
  return nums.every((num) => num % 2 === 0);
}

// Example usage:
console.log(alleven([2, 4, 6])); // Output: true
console.log(alleven([1, 2, 3])); // Output: false

// //29
// function hello(nums) {
//     return [ ...new Set(nums)];
//   }
// console.log(hello([1 ,2 ,2,3,4,5,1 ,2 ,4,5]))

//28
let array = [{ name: "Alice" }, { name: "Bob" }];

function findUser(array, val) {
  return array.find((user) =>
    user.name === val);
}
console.log(findUser(array, "Bob"));

//27
let Arr=[0, 1, false, 2, "", 3];
function filterFalsey(num){
    return num>0; 

    


}

console.log(Arr.filter(filterFalsey));

//26
let aArr=[1, 2, 3];
function double(num){
    num=num*2;
    return num; 

    


}

console.log(aArr.map(double));


//15
function capitalizeWords(str){
    return str.replace(/\b\w/g,char=>
        char.toUpperCase());
}

console.log(capitalizeWords("hello world"))

//
function removeWhitespaces(str){
    return str.replace(/\s+/g,'');
}

console.log(removeWhitespaces("hello world"));


//isPlaindrome
let st="MADAM";
function isPalindrome(str) {
    // Write your code here
    // return the result
      let x = str.toLowerCase();
      let y = x.split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
      for(let i =0;i<y.length;i++){
       if(y[i]!=y[y.length-1-i]){
           return false;
           }
       }
      return true;
  }
  console.log(isPalindrome(st))


  function replaceSpecialChars(str) {
    return str.replace(/[\/\-]/g, "_"); // Replace `/` and `-` with underscores
  }
  
  // Example usage:
  console.log(replaceSpecialChars("2024/10-18")); // Output: "2024_10_18"]

  //

  function removeSlashes(str) {
    return str.replace(/\//g, ""); // Remove all slashes
  }
  
  // Example usage:
  console.log(removeSlashes("path/to/file")); // Output: "pathtofile"