const questions = [
  {
    question: "which is the largest animal in the world ?",

    answers: [
      { text: "shark", correct: false },
      { text: "Blue  Whale", correct: true },
      { text: "Eleplant", correct: false },
      { text: "Giraffe", correct: false },
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
const questionElement = document.getElementById("question");
const ansButtons = document.getElementById("ans-button");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML='Next';
    showQuestion();

    
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+" . "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

        }
        button.addEventListener('click',selectAnswer)

    })
}
function resetState() {
    nextButton.style.display = "none";
    while (ansButtons.firstChild) {
        ansButtons.removeChild(ansButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    console.log(selectBtn);
    const isCorrect=selectBtn.dataset.correct==="true";
     if(isCorrect){

        selectBtn.classList.add("correct");
        score++;


     }
     else{
        selectBtn.classList.add("incorrect");
     }
     Array.from(ansButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

    }
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();

    }
})
startQuiz();
