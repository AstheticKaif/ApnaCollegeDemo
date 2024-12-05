//   Map method --->will loop through every element of our array and will perform  specific operation that you have provided
//map will return a new array

// let nums = [1 ,2 ,3,4,5]

// Calculate the squares of each element 
// and store it in a new array

// use a function



// function sqaureArrFn(arr){
//     let sqauaredArr = []
    
//     for (let i=0 ; i<arr.length ; i++){
//         sqauaredArr.push(arr[i]*arr[i])
//     }
//     return sqauaredArr
// }

// let results = sqaureArrFn(nums)

// console.log(results)

// console.log(nums)


// Map method

let numbers = [1 ,4 ,7 ,5 ,4]

function calculateSqaure(num){
  return num*num
}

const resultsMap = numbers.map(calculateSqaure)

console.log(resultsMap)
console.log(numbers)


// let arr=[2,3,4,5,6]
// function square(num){
//         return num*num;
// }
// var result=arr.map(square);
// console.log(result)

// Excercise 

const transactions = [1000 , 2000 , 8000 , 4000]

const inrToUsd = 83;

function convert(transaction){
    return transaction/inrToUsd
}


let convertedAmounts = transactions.map(convert)
console.log(convertedAmounts)
 const num=[1,2,3,4,5]
 function sq(num){
  return  num*num;
}
const squredNum=num.map(sq);
console.log(squredNum)

//or

const squredNumber=num.map(function(n){ // map method  num ka ek ek element ko pakd ke niche jo logic likha hahin usse kre ga then squredNumber name ke ek new array main ans stored hota rhe ga,,

  return n*n;
}) 
console.log(squredNumber)

// foreach method does not return any array and it gived as single value

const squredNumber1=num.forEach((n)=>{
  console.log(n*n)

})









