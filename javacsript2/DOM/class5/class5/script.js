

const quizForm = document.querySelector(".quiz-form");
    const resultDiv = document.querySelector(".result");
    const resultMessage = resultDiv.querySelector("p");
    

    const correctAnswers = ["D", "B", "C", "B", "D"];
    
    quizForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        let score = 0;
        const userAnswers = new FormData(quizForm);
        

        correctAnswers.forEach((answer, index) => {
            if (userAnswers.get(`q${index + 1}`) === answer) {
                score++;
            }
        });


        const totalQuestions = correctAnswers.length;
        const percentage = Math.round((score / totalQuestions) * 100);

        resultMessage.textContent = `You scored ${score}/${totalQuestions}! (${percentage}%)`;
        resultDiv.classList.remove("hide");
    });