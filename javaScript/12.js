// let numbers = [1 ,2 ,3 ,4,5]


// function sumAll(arr){
//     let sum = 0

//     for(let i=0 ; i<arr.length;i++){
//         sum = sum+arr[i]
//     }

//     return sum
// }

// let sumFinal = sumAll(numbers)
// console.log(sumFinal)


let nums = [1 ,2 ,3 ,4,5]



//acumulaator 
function sumAll(acc ,currEle ){
  acc = acc+ currEle
  return acc
}

let sum = nums.reduce(sumAll ,0)

console.log("From Reduce", sum)
