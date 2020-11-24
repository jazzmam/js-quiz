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
		questionText: 'Which city is considered the birthplace of jazz?',
		answers: [
			{text: 'Chicago', correct: false},
			{text: 'New York City', correct: false},
			{text: 'Kansas City', correct: false},
			{text: ' New Orleans', correct: true}
		],
		explanation: 'Jazz is a byproduct of the unique cultural environment found in New Orleans at the late 19th and early 20th centuries, with the vestiges of French and Spanish colonial roots, the legacy of African influences after the slavery era and the influx of immigrants from Europe. The ways these cultures mingled, collided and evolved together in the Crescent City produced America’s most distinctive musical style.'
	},
	{
		questionText: 'Which Jazz branch represented a significant transformation in jazz’s history making jazz not only a dancing music but also music only for listening?',
		answers: [
			{text: 'Cool Jazz', correct: false},
			{text: 'Bebop', correct: true},
			{text: 'Free Jazz', correct: false},
			{text: 'Gypsy jazz', correct: false}	
		],
		explanation: 'Bebop developed as the younger generation of jazz musicians expanded the creative possibilities of jazz beyond the popular, dance-oriented swing style. It that was not as danceable and demanded close listening. As bebop was not intended for dancing, it enabled the musicians to play at faster tempos.'
	}
]