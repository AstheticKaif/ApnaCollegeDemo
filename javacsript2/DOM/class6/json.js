const course = {
  coursename: "js in hindi", 
  price: "999", 
  courseInstructor: "hitesh"
};

// Destructuring to get the 'courseInstructor' property from the 'course' object
const { courseInstructor: Instructor } = course;

// Logging the value of 'courseInstructor'
console.log(Instructor); // Output: hitesh
[
  {
    "coursename": "js in hindi",
    "price": "999",
    "courseInstructor": "hitesh"
  },
  {
    "coursename": "react in hindi",
    "price": "1499",
    "courseInstructor": "john"
  },
  {
    "coursename": "node.js in hindi",
    "price": "1999",
    "courseInstructor": "jane"
  }
]

// This JSON example is an array of objects where each object represents a course with properties like coursename, price, and courseInstructor.