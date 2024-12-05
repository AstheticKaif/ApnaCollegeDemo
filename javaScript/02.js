//array
let evnNum=[2,4,6,'scaler',true] //true==1
let mulArray=[];
for(let i=0;i<evnNum.length;i++){
    mulArray.push(evnNum[i]*2)
}
console.log(evnNum)
console.log(mulArray)
let endexOfAddedElemnt=evnNum.push("kaif");
evnNum.push("0")
console.log(evnNum) 
console.log(endexOfAddedElemnt)// will give the index of the added elemnt+1
// pop()
evnNum.pop();
console.log(evnNum) 


// unshift
evnNum.unshift("comeFirst");
console.log(evnNum) 
 //shift

 evnNum.shift();
 console.log(evnNum) // now the added element is deleted
 evnNum.shift();
 console.log(evnNum) // now the first element  ie 2 is deleted





