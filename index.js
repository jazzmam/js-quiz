const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const answerExplanationElement = document.getElementById('answer-explanation');

let shuffledquestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++;
	setNextQuestion();
});


function startGame() {
	startButton.classList.add('hide');
	shuffledquestions = questions.sort(() => Math.random() - .5);
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledquestions[currentQuestionIndex]);
}

function resetState() {
	nextButton.classList.add('hide');
	while (answerButtonsElement.firstChild)
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	answerExplanationElement.classList.add('hide');
}

function showQuestion(question) {
	questionElement.innerText = question.questionText;
	answerExplanationElement.innerText = question.explanation;
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

function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;
	setStatusClass(document.body, correct);
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})

	if(shuffledquestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide');
	} else {
		startButton.innerText = 'Restart';
		startButton.classList.remove('hide');
	}
	answerExplanationElement.classList.remove('hide');
}

function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add('correct');
	} else {
		element.classList.add('wrong');
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}

const questions = [
	{
		questionText: 'What is your name?',
		answers: [
			{text: 'Ruta', correct: true},
			{text: 'Laima', correct: false},
			{text: 'Luka', correct: false},
			{text: 'Sima', correct: false}
		],
		explanation: 'name explanation text here'
	},
	{
		questionText: 'Best tennis player?',
		answers: [
			{text: 'Federer', correct: false},
			{text: 'Nadal', correct: false},
			{text: 'Djokovic', correct: true},
			{text: 'Thiem', correct: false}	
		],
		explanation: 'player explanation text here'
	},
	{
		questionText: 'Favourite animal?',
		answers: [
			{text: 'giraffe', correct: false},
			{text: 'lion', correct: false},
			{text: 'cat', correct: true},
			{text: 'dog', correct: false}	
		],
		explanation: 'animal explanation text here'
	}
]