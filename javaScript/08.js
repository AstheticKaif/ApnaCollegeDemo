let arrRadius = [1, 2, 3, 4, 5];

// Function to calculate areas
function calculateArea() {
  let areaArr = [];
  for (let i = 0; i < arrRadius.length; i++) {
    areaArr.push(Math.PI * arrRadius[i] * arrRadius[i]);
  }
  return areaArr;
}

// Function to calculate diameters
function calculateDiameter() {
  let diameterArr = [];
  for (let i = 0; i < arrRadius.length; i++) {
    diameterArr.push(2 * arrRadius[i]);
  }
  return diameterArr;
}

// Function to calculate circumferences
function calculateCircumference() {
  let circumferenceArr = [];
  for (let i = 0; i < arrRadius.length; i++) {
    circumferenceArr.push(2 * Math.PI * arrRadius[i]);
  }
  return circumferenceArr;
}

// Displaying the results
console.log("Areas:", calculateArea(arrRadius));
console.log("Diameters:", calculateDiameter(arrRadius));
console.log("Circumferences:", calculateCircumference(arrRadius));