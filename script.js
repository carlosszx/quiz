const questions = [
    {
                question: "Qual é a frase que eu mais ouvi você falar?",
        options: ["Quero minha casa", "To com sono", "Ai, minhas costas estão doendo", "Que preguiça"],
        answers: [2] // Índices das respostas corretas
    },
    {
        question: "O que eu mais acho bonito em você?",
        options: ["Tudo", "Tudo", "Tudo", "Tudo"],
        answers: [0, 1, 2, 3] // Índices das respostas corretas
    },
    {
        question: "Aceita tomar um açaí comigo?",
        options: ["Sim", "Claro", "Com certeza", "Óbvio"],
        answers: [0, 1, 2, 3] // Índice da resposta correta
    },

];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    const questionElement = document.querySelector(".question");
    const optionsElements = document.querySelectorAll(".option");
    const feedbackElement = document.getElementById("feedback");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    feedbackElement.textContent = ""; // Limpa o feedback anterior

    currentQuestion.options.forEach((option, index) => {
        optionsElements[index].textContent = option;
        optionsElements[index].onclick = () => selectOption(index);
    });
}

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.answers;

    if (correctAnswers.includes(selectedIndex)) {
        score++;
        showFeedback("Resposta correta!");
    } else {
        showFeedback("Resposta incorreta.");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 1000); // Mostra a próxima pergunta após 1 segundo
    } else {
        setTimeout(showResult, 1000); // Mostra o resultado após 1 segundo
    }
}

function showFeedback(message) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = message;
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const resultElement = document.getElementById("result");
    const music = document.getElementById("celebration-music");
    const readLetterButton = document.getElementById("read-letter-button");

    quizContainer.querySelector(".question-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");

    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    music.play();
    readLetterButton.classList.remove("hidden");

    readLetterButton.addEventListener("click", showLetter);
}

function showLetter() {
    const letterContainer = document.getElementById("letter-container");
    const readLetterButton = document.getElementById("read-letter-button");

    letterContainer.classList.remove("hidden");
    readLetterButton.classList.add("hidden");
}