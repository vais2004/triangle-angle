const quizForm = document.querySelector(".quiz-form");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#output");

const answers = [
	"90°",
	"2 congruent sides",
	"Equilateral triangle",
	"Obtuse",
	"180 degrees"];

button.addEventListener('click', function calculateScore(){

    const data = new FormData(quizForm);
	let score = 0,
		index = 0;
	for (let entry of data.values()) {
		if (entry === answers[index]) {
			score = score + 1;
		}
		index = index + 1;
	}
	message.innerText = "Your score is " + score;

});





