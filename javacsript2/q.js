// let num = 123;
// let strNum = num.toString(); // "123"
// let bool = true;
// let strBool = bool.toString(); // "true"
// let arr = [1, 2, 3];
// let strArr = arr.toString(); // "1,2,3"

// let obj = { name: "Alice" };
// let strObj = obj.toString(); // "[object Object]"
// console.log(strArr)

// let date = new Date();
// let strDate = date.toString(); // e.g., "Tue Nov 07 2023 10:00:00 GMT-0500 (Eastern Standard Time)"

// const arr1=[2,4,6,8]
// const binary=arr1.map((x)=>x.toString(16));
// console.log(binary)

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// Get the first names of users under 30 years old
// const output = users
//     .filter((x) => x.age < 30)
//     .map((x) => x.firstName);

// console.log(output);

//using filter

const output1=users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;


},[]);

console.log(output1)
