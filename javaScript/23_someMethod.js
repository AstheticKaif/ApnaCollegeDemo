// some method 
// some:condition check:to get true or false based on a condition
// it will return true even if one element satisfies the condition
const transactions=[100,1000,123,6878,234]
let result=transactions.some(function(n){
    return n>0;
})
console.log(result)

//every elemnt
let resultEvery=transactions.every(function(n){
    return n>0;
})
console.log(resultEvery)

//filter
let numbers=[1,2,3,4,5,,6,1,2];
let evenArr=[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenArr.push(numbers[i])
    }

}
console.log(evenArr)

//FILTER
//filter returns a new array it will return all thode elements that matches the specidfic condition
//if the condition is true it will return the element for that condition and if it is false it will discard that element
let nums=[1,2,3,67,4,5,6,7,8,9,]
let evenNums=nums.filter(function(n){
    return n%2==0;
})
console.log(evenNums)

//reduce
let num1=[1,2,3,4,5]

let result1=num1.reduce(function(acc,value){
    let updatedSum=acc+value;
    return updatedSum;

},0) // ACCUMULATOR WILL GET UPTATED AS PER UPDATEDsum
console.log(result1)


