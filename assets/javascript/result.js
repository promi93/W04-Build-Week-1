let url = window.location.search; // Recupera i parametri dalla stringa dell'Url
const parametro = new URLSearchParams(url); // Estrae il valore del parametro "result"
const score = parametro.get("result"); // E lo salva nella variabile

window.onload = function () {};

let numeroSuccessi = score; //Variabile risposte corrette 
let numeroTotale = 10; // Sul numero di domande totali


// Imposto valori per mostrare il numero di risposte corrette e il numero di risposte errate
document.getElementById(
  "numAnswersCorrect"
).innerHTML = `<p>${numeroSuccessi}/${numeroTotale} questions</p>`;

let numeroFallimenti = numeroTotale - numeroSuccessi;
document.getElementById(
  "numAnswersWrong"
).innerHTML = `<p>${numeroFallimenti}/${numeroTotale} questions</p>`;


// Calcola la percentuale di successo e di fallimento del Quiz
let percentualeSuccesso = (numeroSuccessi / numeroTotale) * 100;
document.getElementById("success-rate").innerHTML = percentualeSuccesso + "%";

let percentualeFallimento = 100 - percentualeSuccesso;
document.getElementById("failure-rate").innerHTML = percentualeFallimento + "%";



// Imposta i dati del grafico
window.onload = function () {};

var data = {
  labels: ["Correct", "Wrong"],
  datasets: [
    {
      data: [percentualeFallimento, percentualeSuccesso],
      backgroundColor: ["#c2128d", "#00ffff"],
      borderColor: ["#c2128d", "#00ffff"],
      borderWidth: 1,
    },
  ],
};

var data = {
  labels: ["Wrong", "Correct"],
  datasets: [
    {
      data: [percentualeFallimento, percentualeSuccesso],
      backgroundColor: ["#c2128d", "#00ffff"],
      borderColor: ["#c2128d", "#00ffff"],
      borderWidth: 1,
    },
  ],
};


// Disegno Grafico Doughnut con libreria Chart.js
var ctx = document.getElementById("pieChart").getContext("2d");
ctx.canvas.width = 350;
ctx.canvas.height = 350;
ctx.canvas.border = 1;

var pieChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    responsive: false,
    cutoutPercentage: 72,
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var index = tooltipItem.index;
          return data.labels[index] + ": " + dataset.data[index] + "%";
        },
      },
    },
    legend: {
      display: false,
    },
  },
});



// Imposta un messaggio di successo o di fallimento in base al numero di risposte corrette
window.onload = function () {};

if (numeroSuccessi > 5) {
  document.getElementById(
    "inside_canvas"
  ).innerHTML = `<div class="congatWrong"> <p class="p1">Congratulations!</p>
    <p class="p2correct">You passed the exam.</p>
    <p class="p3">We'll send you the certificate in few minutes. <br> Check your email (including promotions / spam folder)</p> </div>`;
} else {
  document.getElementById(
    "inside_canvas"
  ).innerHTML = `<div class="congatWrong"> <p class="p1">We are sorry!</p>
      <p class="p2wrong">You didn't passed the exam.</p>
      <p class="p3">We'll send you the certificate of death in few minutes. <br>Check your heaven mail (including promotions / spam folder)</p> </div>`;
}
