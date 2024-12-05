// hoisting is a phenomenon that allows  you move a function top


// function firstName(name){
//     console.log(name )

// }
// firstName('kaif');
// function lastName(last){
//     console.log(last)
// }
// lastName("molla") 

// call back
function firstName(name,cb1,cb2){
    console.log(name)
    cb1('molla')
    printAge(19)
}
function lastName(last){
    console.log(last)
}
firstName('kaif',lastName,printAge);


function printAge(age){
    console.log(age)
   
}

// printAge(19,name)
// function name(name){
//     console.log(name)
// }


