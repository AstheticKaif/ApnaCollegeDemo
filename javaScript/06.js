var a=6;
var b=6;
function test(){
    console.log("hi")
}
console.log(a);
test()
console.log(b);
function addTwoNumbers(m,n){
    return m+n;
  

}
const sum1=addTwoNumbers(a,b);
const sum2=addTwoNumbers(4,5);
console.log(sum1);
console.log(sum2);


//funtion]
function greet(){ // in memory allocation greet() function definition will be done
    
    console.log("hello")
}
greet();


//function as expression v,first class citizens 
var greet2=function(){  // here greet2 will act as variable of in memory allocation greet2 var 
    // will undefied first  so if greet2 function is calleed first before the function definition  then it will show error as greet is not defined.
    console.log("assallamu Alikum")
}
// console.log()
greet2()

///---------------------Arrow Function--------------------------
var a=2,b=3;
let test1=(s)=>{
    console.log(1)
}
let test2=a=>{
    console.log(a+2)
}

let test3=(a,b)=>{
    console.log(a+b)
}
test1(3);
test2(a);
test3(a,b);