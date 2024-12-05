let arr=[
    {name:"A",age: 14, gender:"M"},
    {name:"B",age:23,gender:"M"},
    {name:"C",age:42,gender:"F"}

]
// AGE OF ALL THE MEN(MALES)
let males=arr.filter(function(obj){
    return obj.gender=="M"
}). map(function(males){
    return males.age;
})
console.log(males)

