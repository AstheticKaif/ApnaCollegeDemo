let user=new Object();
// let anothuser={};
// console.log(user)
// console.log(anothuser);
// let person={
//     User:"Kiaf",
//     age:19,
//     phoneNumber:737846378,
// };
// console.log(person["age"]) // bracket notation
// console.log(person.phoneNumber) //dot notation
let captainAmerica ={
    name : 'Steve Rogers',
    age : 102,
    // Array
    allies : ['Tony', 'bruce', 'bucky'],

    // function inside an object
    sayHi : function(){
        console.log('Captain says hi')
    },

    // nested object
    address :{
        country : 'USA',
        city : {
            name : 'Brokkly',
            pincode : 12345,
        }
    },


    // Boolean
    isAvenger : true,
}

// accessing age from captainAmerica object

console.log(captainAmerica.age)  // prints 102


// accessing element of array allies from captainAmerica object
console.log(captainAmerica.allies[1]) // prints bruce


// accessing element from the nested object
console.log(captainAmerica.address.city) 

// print complete city object
console.log(captainAmerica.address.city.pincode) // print 12345

// changing some values of an object
captainAmerica.isAvenger=false

// adding new key-value in object
captainAmerica.movies=['End Game', 'Age of Ultorn', 'Civil War']


//The above statement will create a key with movies if it is not available in the object otherwise it will update the previous value of movies.


// calling function defined within an object
captainAmerica.sayHi() 


//Deleting key from an object

delete captainAmerica.age


function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  // Example usage:
  console.log(countProperties({a: 1, b: 2})); // Output: 2
  console.log(countProperties({})); // Output: 0
  console.log(countProperties({name: "Ali", age: 25, country: "Egypt"})); // Output: 3