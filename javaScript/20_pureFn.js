var a=2;
// impure function
function addImpure(x){
    console.log(x+a);
    a++;
}
addImpure(2)
addImpure(2)


// pure function--->for the same argumemt passed you should get same output,


//pure function
function  addPure(a,b){
    return a+b;
}
console.log(addPure(2,3))
addPure(2,3);
addPure(2,3);
addPure(2,3);
