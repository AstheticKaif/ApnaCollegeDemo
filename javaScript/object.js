// What are objects in JavaScript?
// An unordered collection of key-value pairs...

let obj = {};



// Person
const person1 = { 
    name: "kaif",
    owns_a_car: true,
    grade: 90,
    phone: 92992,
};

// Captain America
let cap = {
    firstname: 'steve',
    lastName: 'rogers',
    age: 110,
    allies: ['hulk', 'tony'],
    address: {
        country: 'USA',
        state: {
            statename: 'mathsssdj',
            pincode: 786287,
        }
    },
    sayHi: function () {
        console.log('captain america');
    }
};

// Dot notation to access nested properties
console.log(cap.address.state.statename); // Output: mathsssdj
cap.sayHi();
console.log(cap)
delete cap.age;
console.log(cap);
cap.firstname="kaif";
console.log(cap);
// If you have an object named ironman and you want to access the firstName(key) value out of it , How will you do it?
// ironman.firstName
// ironman[‘firstName’]