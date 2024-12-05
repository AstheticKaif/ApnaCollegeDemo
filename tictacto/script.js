let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset-btn");
let turn0 = true; //playerX,playerO
// let arr = ["apple", "bannaba", "lichi"];
// let arr2 = [
//   ["apple", "lichi"],
//   ["potato", "mushroom"],
//   ["pants", "shirts"],
// ]; //2d arrray
const winPatterns = [
  [0,1,2],
  [0, 3, 6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],

];
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box clixked");
    if(turn0){
      box.innerText="O";
      turn0=false;
    }
    else{
      box.innerText="X";
      turn0=true;
    }
    box.disabled=true;
  })

})
