// let arr = [1,2,3,4,5]
// function reverse(arr){
//   let revesedArray= arr.reverse();
//   return  revesedArray;
  
// }
// reverse (arr)
// console.log(arr)

// q1---> let arr=[2,3,4,5,6,7]
// function reverseArray(arr){
//     let reverse=[]
//     for(let i=arr.length-1;i>=0;i--){
//         reverse.push(arr[i])

//     }
//     return reverse


// }
// let result=reverseArray(arr)
// console.log(result)
// let arr1=arr.reverse();
// console.log(arr1)
 
 
//q2//
// let arr = [1, 2, 2, 3, 4, 4]
//  function removeDuplicates(arr){
//   arr.sort();
//   for(let i=0;i<arr.length;i++){
  
//     for(let j=0;j<i;j++){
//      if(arr[i]==arr[j]){
//       arr.splice(j,1);  // splice(): This method is used to modify an array by removing or adding elements.
//      }
//     }
//   }
//   return arr;
// }
// console.log(removeDuplicates(arr))

//  }

//  removeDuplicates(arr)
//  console.log(arr)

// q2---->let arr=[1,5,6,7,3,2,2,8]
//  let arr1=arr.sort();
//  let n=arr1.length;
//  let temp=[]
//  for(let i=0;i<arr1.length;i++){
    
//         if(arr1[i]!=arr1[i+1]){
//             temp.push(arr1[i]);

//         }
    
//  }

//  console.log(temp)

// function removeDuplicates(arr){
//     let A=[]
//     for(let i=0;i<arr.length;i++){

         

//     }
//     return reverse


// }
// let result=reverseArray(arr)
// console.log(result)
// let arr1=arr.reverse();
// console.log(arr1)

// let radius = [1,2,3,4,5]
// function calculate(value,logic){
// let ans = []
// for(let i =0;i<value.length;i++){
//     ans[i] = logic(value[i]);
// }
// return ans;
// }
// function area(x){
//     return 3.14*x*x;
// }
// let a =calculate(radius,area)
// console.log(a)

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num,index) =>{
//   console.log(index + " " + num/3)
// })
// console.log(numbers)



// removeDuplicates=(arr)=>{
//   arr = arr.sort();
//   for(let i=0;i<arr.length;i++){
//     let count = 0;
//     for(let j=0;j<i;j++){
//       if(arr[i]==arr[j]){
//         arr.splice(i,1)
//       }
//     }
//   }
//   return arr;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))


//q3//

// let arr = [4, 1, 7, 3]
// let v = arr.reduce((max,cur)=>{
//   if(cur>max){
//     max = cur;
//   }
//   return max;
// },0)
// console.log(v)


// q5//

// let arr = [1, [2, [3, 4]]]

// let v = arr.flat(Infinity)
// console.log(v)

//q6//

// mergeObjects=(ob1,ob2)=>{
//     let obj3={...ob1,...ob2}
//     return obj3
// },
// console.log(mergeObjects({a:1},{b:2}))



// obj = {a: 1, b: 2}
// console.log(Object.keys(obj).length)





// for(let i=0;i<Object.keys(obj).length;i++){
  
// console.log(obj[Object.keys(obj)[i]])}
// obj = {a: 1, b: 2}
// function deepClone(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
// console.log( deepClone(obj))

//q9//
// const filterByKeys = (obj, arr) => {
//   let newObj = {};
//   for (let val of arr) {
//     if (val in obj) {  // Use 'in' to check if key exists in the object
//       newObj[val] = obj[val];  // Add the key-value pair to the new object
//     }
//   }
//   return newObj;
// }
// console.log(filterByKeys({a: 1, b: 2, c: 3}, ['a', 'c']))

// let filterByKeys=((obj, arr) => {
//   let newobj = {};

//   for (let item of arr) {
//     if (obj == item) {
//       newobj[obj] = item;
//     }
//   }

//   return newobj;
// });

// console.log(filterByKeys({ a: 1, b: 2, c: 3 }, ["a", "c"]));


// console.log(filterByKeys({ a: 1, b: 2, c: 3 }, ['a', 'c']));  // { a: 1, c: 3 }

// swapKeysAndValues = (obj) => {
//   for(let i=0;i<Object.keys(obj).length;i++){
//     let temp =0;
//     temp = 
//     Object.keys(obj)[i] =  obj[Object.keys(obj)[i]]
//     obj[Object.keys(obj)[i]] = temp;
   
//   }
//   return obj;
// }
// console.log(swapKeysAndValues({a: 1, b: 2}))


// const swapKeysAndValues = (obj) => {
//   const newObj = {};  // Create a new object to store swapped keys and values
//   for (const key in obj) {
//     newObj[obj[key]] = key;  // Assign the value as the new key and the key as the new value
//   }
//   return newObj;  // Return the new object with swapped keys and values
// }

// console.log(swapKeysAndValues({ a: 1, b: 2 }));  // { 1: 'a', 2: 'b' }


// const swapKeysAndValues = (obj) => {
//   const newObj = {};  // Create a new object to store swapped keys and values
//   for (const key in obj) {
//     newObj[obj[key]] = key;  // Assign the value as the new key and the key as the new value
//   }

//   // Convert the keys of newObj to numbers
//   const numericObj = {};
//   for (const key in newObj) {
//     numericObj[Number(key)] = newObj[key];  // Convert the key to a number
//   }

//   return numericObj;  // Return the new object with swapped keys and values
// }

// console.log(swapKeysAndValues({ a: 1, b: 2 }));  // { 1: 'a', 2: 'b' }
// const reverseString = (str) => {
//   return str.split('').reverse().join('');  // Split, reverse, and join the characters back into a string
// }

// console.log(reverseString("hello")); 


// capitalizeWords = (str) =>{
//   let a = str.split(' ')
//   a = a.map(word => word = word.charAt(0).toUpperCase()+ word.slice(1))
//   return a.join(' ')

// }
// console.log(capitalizeWords("hello world"))

// console.log(a);
// var a = 10;

// greet();
// function greet() {
//     console.log("Hello!");
// }


// function findUser(users, name) {
//     let a = users.find(user => user.name === name);
//     return a;
// }

// // Example usage:
// const result = findUser([{name: 'Alice'}, {name: 'Bob'}], 'Bob');
// console.log(result); // {name: 'Bob'}
// let arr1=[2,3,4,5,6,7]
//  let findmax=arr1.map(n =>{
//   n = 2*n;
//   return n;

//  })
    




// console.log(findmax)

// function merged(ob1,ob2){
//   let obj3={...ob1,...ob2}
//   return obj3;
// }
// console.log(merged({a: 1}, {b: 2}));

function countVowels(str) {
  const vowels = "aeiouAEIOU"; // List of vowels (both lowercase and uppercase)
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("hello world")); // Output: 3