let questions=[
    {
        question:"What is the greatest animal in the world ?",
        answers:[
            {text:"shark", correct:false},
            {text:"whale",correct:true},
            {text:"elephant",correct:false},
            {text:"girrafe",correct:false},
        ],
    },
    {
        question:"what is the largest country of Asia ?",
        answers:[
            {text:"India" ,correct:false},
            {text:"Chaina",correct:false},
            {text:"Russia",correct:true},
            {text:"Pakistan",correct:false},
        ],
        
    },
    {
        question: "which is the smallest continent in the world ?",
    
        answers: [
          { text: "Asia", correct: false },
          { text: "Australia", correct: true },
          { text: "Arctic", correct: false },
          { text: "Africa", correct: false },
        ],
      },
];
let questionElement=document.querySelector("#question")
let ansButtons=document.querySelector(".ans-btn")
let nextButton=doc.querySelector(".nxt-btn")
let currentQuestionIndex=0;
let score=0;
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestion+1;
    questionElement.innerHTML=questionNo +" . "+currentQuestion.question;
    currentQuestion.answers.forEach(question=>{
        const button=document.createElement("Button")
        button.innerHTML=answers.text;
        button.classList.add("btn");
        ansButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}
function resetState(e){
    const selectBtn=e.target
}


