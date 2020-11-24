const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledquestions, currentQuestionIndex;



startButton.addEventListener('click', startGame);


function startGame() {
	startButton.classList.add('hide');
	shuffledquestions = questions.sort(() => Math.random() - .5);
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	showQuestion(shuffledquestions[currentQuestionIndex]);
}

function showQuestion(question) {
	questionElement.innerText = question.questionText;
	question.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answerButtonsElement.appendChild(button);
	})
}

function selectAnswer() {
	console.log("dfsfs");
}

const questions = [
	{
		questionText: 'What is your name?',
		answers: [
			{text: 'Ruta', correct: true},
			{text: 'Laima', correct: false},
			{text: 'Luka', correct: false},
			{text: 'Sima', correct: false}
		]
	},
	{
		questionText: 'What is your gender?',
		answers: [
			{text: 'male', correct: false},
			{text: 'male', correct: false},
			{text: 'female', correct: true},
			{text: 'male', correct: false}	
		]
	},
	{
		questionText: 'What is ?',
		answers: [
			{text: 'male', correct: false},
			{text: 'male', correct: false},
			{text: 'female', correct: true},
			{text: 'male', correct: false}	
		]
	}
]