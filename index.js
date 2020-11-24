const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

startButton.addEventListener('click', startGame);


function startGame() {
	startButton.classList.add('hide');
	questionContainer.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	
}

function selectAnswer() {

}

const questions = [
	{
		question: 'What is your name?',
		answers: [
			{text: 'Ruta', correct: true},
			{text: 'Laima', correct: false},
			{text: 'Luka', correct: false},
			{text: 'Sima', correct: false}
		]
	},
	{
		question: 'What is your gender?',
		answers: [
			{text: 'male', correct: false},
			{text: 'male', correct: false},
			{text: 'female', correct: true},
			{text: 'male', correct: false}	
		]
	}
]