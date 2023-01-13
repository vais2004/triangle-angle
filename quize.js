const quizForm = document.querySelector(".quiz-form");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#output");

const correctAnswers = [
	"180 degrees",
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
  const formResults = new FormData(quizForm);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  message.innerText = "The score is " + score;
}

button.addEventListener("click", calculateScore);





