
// MULTILINE STRING 

console.log(`I 
AM 
KAIF`)
// USE OF VARIBLE IN SIDE A STRING 
let d=19;
console.log(`my age is ${d}`)


//destructuring array
let arr=["hi","I ", ,"am","kaif"];
// let a=arr[1];
// let b=arr[2]
// console.log(b)
// console.log(a)

//
let[a,b,c,f,e]=arr;
console.log(a)
console.log(c)


// to destructe an object ,byou have to pass same key name 
let myObj={
    name:'Adam',
    age:25,
    gender:"male",
    address:{
        country:"India",
        state:"telengana"
    }

};
let{name:naam,age:aayu,gender:sex,address:{country:cun}}=myObj; // we can provide another name to the key
console.log(naam)
console.log(sex)
console.log(c)







