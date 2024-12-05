let btn=document.querySelector("#btn-1")
console.log(btn)

btn.addEventListener('click',function(){
    console.log('Button Clicked')
   let HelloDiv= document.createElement('div')
   console.log(HelloDiv)
   HelloDiv.innerText="hi kaif ,you are late today"
   let bodyElement=document.querySelector('body')
   bodyElement.appendChild(HelloDiv)
})



