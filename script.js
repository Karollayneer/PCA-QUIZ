const questionEl = document.getElementById("question");
const answerBtnsEl = document.getElementById("answer-buttons");
const scoreEl = document.getElementById("score");
const erroEl = document.getElementById("erro");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;
let erro = 0;

const questions = [
  {
    question: "O que significa a sigla HTML?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Text Modeling Language", correct: false },
    ],
  },
  {
    question: "Qual é a capital do Brasil?",
    answers: [
      { text: "Brasília", correct: true },
      { text: "São Paulo", correct: false },
      { text: "Rio de Janeiro", correct: false },
      { text: "Belo Horizonte", correct: false },
    ],
  },
  {
    question: "Quem descobriu o Brasil?",
    answers: [
      { text: "Cristóvão Colombo", correct: false },
      { text: "Pedro Álvares Cabral", correct: true },
      { text: "Fernão de Magalhães", correct: false },
      { text: "Vasco da Gama", correct: false },
    ],
  },
  {
    question: "Barriga-verde é um gentílico para qual estado brasileiro?",
    answers: [
      { text: "Acre", correct: false },
      { text: "Maranhão", correct: false },
      { text: "Paraná", correct: false },
      { text: "Santa Catarina", correct: true },
    ],
  },
  {
    question: "Qual linguagem de programação que é front e back end ?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "PhP", correct: false },
      { text: "Java", correct: false },
    ],
  },

  {
    question: "quanto é 98 + 32 ?",
    answers: [
      { text: "124", correct: false },
      { text: "129", correct: false },
      { text: "127", correct: true },
      { text: "130", correct: false },
    ],
  },
  {
    question: "O que é paroxítona?",
    answers: [
      { text: "Uma substância química", correct: false },
      { text: "Tipo de árvore", correct: false },
      {
        text: "Palavra cujo acento tônico encontra-se na sua penúltima sílaba",
        correct: true,
      },
      { text: "Palavra que possui 4 sílabas", correct: false },
    ],
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    answers: [
      { text: "Terra", correct: false },
      { text: "Júpiter", correct: true },
      { text: "Marte", correct: false },
      { text: "Netuno", correct: false },
    ],
  },
];

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  erro = 0;
  scoreEl.innerText = "0";
  erroEl.innerText = "0";
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    // Todas as perguntas foram respondidas
    showFinalScore();
    return;
  }

  const question = questions[currentQuestion];
  questionEl.innerText = question.question;
  answerBtnsEl.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerBtnsEl.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtnsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    score++;
    scoreEl.innerText = score;
  } else {
    erro++;
    erroEl.innerText = erro;
  }
  currentQuestion++;
  setTimeout(showQuestion, 0); // Adicionamos um atraso de 0 segundo para a próxima pergunta
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function showFinalScore() {
  questionEl.innerText = "Parabéns! Você respondeu todas as perguntas.";
  answerBtnsEl.innerHTML = "";
  startBtn.style.display = "none"; // Esconde o botão "Começar"
  restartBtn.style.display = "inline-block"; // Mostra o botão "Reiniciar"
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  erro = 0;
  showQuestion();
  restartBtn.style.display = "none";
  scoreEl.innerText = score;
  erroEl.innerText = erro;
}

startBtn.addEventListener("click", showQuestion);
restartBtn.addEventListener("click", restartQuiz);
