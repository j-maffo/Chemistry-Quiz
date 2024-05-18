// Create a Quiz

// Answers for question (reminder)
// 1. F-
// 2. Molecular Compound
// 3. Lead II chromate
// 4. Simple decomposition reactions
// 5. Astatine, Bromine, Chlorine, Fluorine, Hydrogen, Iodine, Nitrogen and Oxygen.
// 6. Magnesium, Calcium, Strontium, Barium, Iron, Lead II

// HTML Variables
let q1InEl = document.getElementById("q1-in");
let q2InEl = document.getElementById("q2-in");
let q3InEl = document.getElementById("q3-in");
let q4InEl = document.getElementById("q4-in");
let q5InEl = document.getElementById("q5-in");
let q6InEl = document.getElementById("q6-in");

let q1Mark = document.getElementById("check-q1");
let q2Mark = document.getElementById("check-q2");
let q3Mark = document.getElementById("check-q3");
let q4Mark = document.getElementById("check-q4");
let q5Mark = document.getElementById("check-q5");
let q6Mark = document.getElementById("check-q6");

let outputEl = document.getElementById("score-output");
let outputEl2 = document.getElementById("note-output");
//  Event Listeners
document.getElementById("btn").addEventListener("click", btnClicked);

// Event Functions
function btnClicked() {
  // Input
  let q1Value = q1InEl.value;
  let q2Value = q2InEl.value;
  let q3Value = q3InEl.value;
  let q4Value = q4InEl.value;
  let q5Value = q5InEl.value;
  let q6Value = q6InEl.value;

  // Score Count
  let score = 0;
  // Process
  // Answer strings
  let q1Ans = `f-`;
  let q2Ans = `molecular compound`;
  let q3Ans = `lead ii chromate`;
  let q4Ans = `simple decomposition reactions`;

  let correct = `2px solid green`;
  let incorrect = `2px solid red`;
  // question 5 & 6 multiple answers

  // Check Answers
  // Question 1
     if (q1Value.trim().toLowerCase() == q1Ans || q1Value.toLowerCase() == `fluoride ion`) {
    score++;
    q1InEl.style.border = correct;
    q1Mark.innerHTML =
      "<img width='20px' src='img/check.png' alt='check-mark'/>";
  } else {
    q1InEl.style.border = incorrect;
    q1Mark.innerHTML =
      "<img width='20px' src='img/X.png' alt='X-mark'/>"
  }
   if (
    q2Value.trim().toLowerCase() == q2Ans ||
    q2Value.trim().toLowerCase() == `molecular` ||
    q2Value.trim().toLowerCase() == ` A ${q2Ans}`
  ) {
    score++;
    q2InEl.style.border = correct;
    q2Mark.innerHTML =
      "<img width='20px' src='img/check.png' alt='check-mark'/>";
  } else {
    q2InEl.style.border = incorrect;
    q2Mark.innerHTML =
      "<img width='20px' src='img/X.png' alt='X-mark'/>"
  }

  // Question 3
  if (q3Value.trim().toLowerCase() == q3Ans) {
    score++;
    q3InEl.style.border = correct;
    q3Mark.innerHTML =
      "<img width='20px' src='img/check.png' alt='check-mark'/>";
  } else {
    q3InEl.style.border = incorrect;
    q3Mark.innerHTML =
    "<img width='20px' src='img/X.png' alt='X-mark'/>"
  }

  // Question 4
  if (
    q4Value.trim().toLowerCase() == q4Ans ||
    q4Value.trim().toLowerCase() == `simple decomposition` ||
    q4Value.trim().toLowerCase() == "simple decomposition reaction"
  ) {
    score++;
    q4InEl.style.border = correct;
    q4Mark.innerHTML =
      "<img width='20px' src='img/check.png' alt='check-mark'/>";
  } else {
    q4InEl.style.border = incorrect;
    q4Mark.innerHTML =
    "<img width='20px' src='img/X.png' alt='X-mark'/>"
  }

  // Question 5
  if (
    q5Value.trim().toLowerCase() == "astatine" ||
    q5Value.trim().toLowerCase() == "bromine" ||
    q5Value.trim().toLowerCase() == "chlorine" ||
    q5Value.trim().toLowerCase() == "fluorine" ||
    q5Value.trim().toLowerCase() == "hydrogen" ||
    q5Value.trim().toLowerCase() == "iodine" ||
    q5Value.trim().toLowerCase() == "nitrogen" ||
    q5Value.trim().toLowerCase() == "oxygen"
  ) {
    score++;
    q5InEl.style.border = correct;
    q5Mark.innerHTML =
      "<img width='20px' src='img/check.png' alt='check-mark'/>";
  } else {
    q5InEl.style.border = incorrect;
    q5Mark.innerHTML =
      "<img width='20px' src='img/X.png' alt='X-mark'/>"
  }

  // Question 6
  if (
    q6Value.trim().toLowerCase() == "magnesium" ||
    q6Value.trim().toLowerCase() == "calcium" ||
    q6Value.trim().toLowerCase() == "strontium" ||
    q6Value.trim().toLowerCase() == "barium" ||
    q6Value.trim().toLowerCase() == `iron ii` ||
    q6Value.trim().toLowerCase() == `lead ii`
  ) {
    score++;
    q6InEl.style.border = correct;
    q6Mark.innerHTML =
      "<img width='20px' src='img/check.png' alt='check-mark'/>";
  } else {
    q6InEl.style.border = incorrect;
    q6Mark.innerHTML =
    "<img width='20px' src='img/X.png' alt='X-mark'/>"
  }

 // Note for Score
  let note = "";
  if (score == 6) {
    note = `You did perfect! Keep up the good work!`;
  } else if (score == 5) {
    note = `You did awesome!`;
  } else if (score == 4) {
    note = `You did great! `;
  } else if (score == 3) {
    note = `You did well `;
  } else if (score <= 2 && score > 0) {
    note = `Atleast you tried right?`;
  } else if (score == 0 ) {
    note = `Maybe chemistry isn't for you?`
   }

  // Percentage of Score
  let percentage = Math.floor((score / 6) * 100);

  // Output
  outputString = `You got: ${score}/6 (${percentage}%)`;
  if (q1Value.trim().length < 1 ||
  q2Value.trim().length < 1 ||
  q3Value.trim().length < 1 ||
  q4Value.trim().length < 1 ||
  q5Value.trim().length < 1 ||
  q6Value.trim().length < 1 ) {
    outputEl.innerHTML = `Please respond to all questions`
    outputEl.style.color = `rgb(190, 2, 2)`
  } else {
  outputEl.innerHTML = outputString;
  outputEl.style.fontFamily = `'Josefin Sans', sans-serif`;
  outputEl.style.fontOpticalSizing = "auto";
  outputEl.style.fontWeight = "600";
  outputEl.style.fontStyle = "normal";
  outputEl.style.color = "green"
  outputEl2.innerHTML = note;

  }
    
 
}

