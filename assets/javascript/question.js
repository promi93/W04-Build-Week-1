// Array Dati

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Timer Funzione - Trasformazione e Animazione

const circleAnimation = 290; // ANIMAZIONE TIMER (Modificando il valore aumenta la velocità del cerchio)

const colorSvg = {
  // Codice colore SVG
  info: {
    color: "color", // Da modificare in CSS con ID timeRemaing .color
  },
};

const timeLimit = 15; // Tempo limite per la risposta
let timePassed = 0; // Scadenza del timer
let timeLeft = timeLimit; // Tempo Rimanente
let remainingPathColor = colorSvg.info.color; // Codice colore SVG

// Importo Svg Timer
document.getElementById("quizContainer").innerHTML = ` 
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="timeRemaining"
        stroke-dasharray="283"
        class="timeRemaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      > </path>
    </g>
  </svg>
  <span id="labelTimer" class="labelTimer">${formatTime(timeLeft)}</span>
</div>
`;
startTimer();

function resetTimer() {
  // Funzione di reset
  timeLeft = timeLimit;
  timePassed = 0;
  clearInterval(timerInterval);
  startTimer();
}

function startTimer() {
  // Start del timer
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.getElementById("labelTimer").innerHTML = formatTime(timeLeft); // Aggiorna l'elemento HTML con l'ID "labelTimer" con il tempo rimanente
    setCircle();
    if (timeLeft === 0) {
      resetTimer();
    }
  }, 1000); // Ogni secondo aggiorno il timer
}

function formatTime(time) {
  const minutes = Math.floor(time / 60); // Calcola il numero di minuti arrotondando per difetto
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`; // Se i secondi sono inferiori a 10, aggiungi uno 0 all'inizio
  }
  return `${seconds}`; // Restituisci la rappresentazione dei secondi in formato "Secondi"
}

function timeAnimation() {
  const rawTimeFraction = timeLeft / timeLimit; // Calcola la frazione di tempo rimanente rispetto al tempo limite
  return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction); // Applica una trasformazione per creare un'animazione di avanzamento
}

function setCircle() {
  // Calcola la frazione di tempo trascorso rispetto al tempo limite
  const circle = `${(timeAnimation() * circleAnimation).toFixed(0)} 290`;
  document
    .getElementById("timeRemaining")
    .setAttribute("stroke-dasharray", circle);
  // Imposta l'attributo stroke-dasharray dell'elemento SVG che rappresenta la barra di avanzamento del timer
}

// Conteggio e Analisi delle domande

let Question = 0; // Variabile Conteggio Domande
let questionCounter = 1; // Variabile Conteggio +1
let result = 0; // Variabile Risultato

function showQuestion() {
  // Aggiorna il numero della domanda nella pagina
  counter.innerText = `${questionCounter}`;

  // Array Domande [Question]
  const question = questions[Question];
  document.querySelector("#question").innerHTML = question.question;

  // Ciclo for per creare button in base alle domande
  let answersHTML = "";
  for (const answer of question.incorrect_answers) {
    answersHTML += `<button class="choice">${answer}</button>`;
  }
  answersHTML += `<button class="choice">${question.correct_answer}</button>`;

  // Inserisce la stringa HTML dei bottoni delle risposte nella pagina
  document.querySelector("#answers").innerHTML = answersHTML;

  timer = setTimeout(() => {
    // Incrementa la variabile [Question]e controlla se ci sono altre domande da mostrare
    Question++;
    if (Question < questions.length) {
      // Se ci sono altre domande, mostra la prossima domanda e incrementa la variabile [questionCounter]
      showQuestion();
      questionCounter++;
      counter.innerText = `${questionCounter}`;
    } else {
      // Se non ci sono altre domande, reindirizza alla pagina dei risultati
      return window.location.assign(`../../results.html?result=${result}`); // NB Vai alla pagina result + indica il numero del risultato nel link
    }
  }, 15300);
  resetTimer();
}

document.querySelector("#answers").addEventListener("click", (event) => {
  // Verifica risposta
  if (event.target.innerHTML === questions[Question].correct_answer) {
    result += 1;
  }
  //Domanda successiva
  Question++;

  //Reset Timer alla risposta
  clearTimeout(timer);

  if (Question < questions.length) {
    // IF Continua con le domande Else Vai a risultati
    showQuestion();
    questionCounter++;
    counter.innerText = `${questionCounter}`;
  } else {
    return window.location.assign(`../../results.html?result=${result}`); // Vai alla pagina result + indica il numero del risultato nel link
  }
  return result;
});
showQuestion();
