 // Fix the list by inserting the missing element using querySelectorAll and insertBefor
 let fixBtn = document.querySelector('#btn-1')
 console.log(fixBtn)


 fixBtn.addEventListener('click' , function(){
   let allListItems = document.querySelectorAll('li')
   console.log(allListItems)

   let eightElement = allListItems[6]
   console.log(eightElement)

   let sevenElement = document.createElement('li')
   sevenElement.innerText ='7'

   let myList = document.querySelector('ul')

   myList.insertBefore(sevenElement , eightElement)





   
 })