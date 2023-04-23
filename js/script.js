const quizData = [
    {
        question: "Qual é o nome da irmã de Joey?",
        a: "Monica",
        b: "Phoebe",
        c: "Rachel",
        d: "Gina",
        correct: "d"
      },
      {
        question: "Qual é o nome do pai de Ross e Monica?",
        a: "Jack",
        b: "Ben",
        c: "Tom",
        d: "Bob",
        correct: "a"
      },
      {
        question: "Qual é o trabalho de Rachel na loja de departamentos Bloomingdale's?",
        a: "Vendedora",
        b: "Caixa",
        c: "Personal Shopper",
        d: "Gerente de Marketing",
        correct: "c"
      },
      {
        question: "Qual é o sobrenome completo de Ross?",
        a: "Geller",
        b: "Green",
        c: "Bing",
        d: "Tribbiani",
        correct: "a"
      },
      {
        question: "Qual é o nome do vizinho do andar de cima que faz muito barulho em Friends?",
        a: "Gerald",
        b: "Bob",
        c: "Mr. Heckles",
        d: "Ursula",
        correct: "c"
      },
      {
        question: "Qual é o trabalho de Chandler?",
        a: "Ator",
        b: "Publicitário",
        c: "Médico",
        d: "Jornalista",
        correct: "b"
      },
      {
        question: "Qual é a profissão de Ross?",
        a: "Professor",
        b: "Médico",
        c: "Paleontólogo",
        d: "Advogado",
        correct: "c"
      },
      {
        question: "Qual é o nome do apartamento em que Monica e Rachel moram?",
        a: "Central Park West",
        b: "The Grove",
        c: "Chateau",
        d: "Greenwich Village",
        correct: "d"
      },
      {
        question: "Qual é o nome do café favorito dos amigos?",
        a: "Central Perk",
        b: "Starbucks",
        c: "Café 101",
        d: "The Coffee House",
        correct: "a"
      },
      {
        question: "Qual é o nome do personagem interpretado por Jennifer Aniston?",
        a: "Phoebe",
        b: "Rachel",
        c: "Monica",
        d: "Janice",
        correct: "b"
      }
];

const quiz = document.querySelector("#quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const aText = document.querySelector("#a-text");
const bText = document.querySelector("#b-text");
const cText = document.querySelector("#c-text");
const dText = document.querySelector("#d-text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2 class="points">Você acertou ${score}/${quizData.length} questoes </h2> <button  onClick="location.reload()">Recomeçar</button>`;
    }
  }
});
