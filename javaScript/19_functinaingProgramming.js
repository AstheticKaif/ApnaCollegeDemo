//imperative way of writing 

const a=5;
const aSquare=a*a;
let inEven;
if(aSquare%2==0){
    inEven=true;


}
else{
    inEven=false;
}

console.log(inEven)
// declarative way of witing code

const checkForSquare=(x)=>(x*x%2==0 ? true:false)

console.log(checkForSquare(5))