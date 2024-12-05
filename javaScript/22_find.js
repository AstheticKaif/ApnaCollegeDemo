const transaction=[1000,2000,-678,90,-78]
let fisrtWidthrawl=transaction.find(function(n){
    return n<0
})
console.log(fisrtWidthrawl)

//findIndex
let findWidthrawlIndex=transaction.findIndex(function(n){
    return n<0
})
console.log(findWidthrawlIndex)