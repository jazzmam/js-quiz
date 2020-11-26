const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const containerElement = document.getElementById('container');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const controlsContainerElement = document.getElementById('controls-container');
const resultContainerElement = document.getElementById('result-container');
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
	containerElement.classList.add('fixed');
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
	controlsContainerElement.classList.add('hide');
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
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})

	if(shuffledquestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide');
	} else {
		startButton.innerText = 'Restart';
		startButton.classList.remove('hide');
	}
	controlsContainerElement.classList.remove('hide');
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
		questionText: 'Which city is considered the birthplace of Jazz?',
		answers: [
			{text: 'Chicago', correct: false},
			{text: 'New York City', correct: false},
			{text: 'Kansas City', correct: false},
			{text: 'New Orleans', correct: true}
		],
		explanation: 'Jazz is a byproduct of the unique cultural environment found in New Orleans at the late 19th and early 20th centuries, with the vestiges of French and Spanish colonial roots, the legacy of African influences after the slavery era and the influx of immigrants from Europe. The ways these cultures mingled, collided and evolved together in the Crescent City produced America’s most distinctive musical style.'
	},
	{
		questionText: 'Which Jazz branch represented a significant transformation in Jazz’s history making jazz not only a dancing music but also music only for listening?',
		answers: [
			{text: 'Cool Jazz', correct: false},
			{text: 'Bebop', correct: true},
			{text: 'Free Jazz', correct: false},
			{text: 'Gypsy Jazz', correct: false}	
		],
		explanation: 'Bebop developed as the younger generation of jazz musicians expanded the creative possibilities of jazz beyond the popular, dance-oriented swing style. It that was not as danceable and demanded close listening. As bebop was not intended for dancing, it enabled the musicians to play at faster tempos.'
	},
	{
		questionText: 'What instrument is not included to a traditional jazz trio?',
		answers: [
			{text: 'Drums', correct: false},
			{text: 'Saxophone', correct: true},
			{text: 'Piano', correct: false},
			{text: 'Double bass', correct: false}	
		],
		explanation: 'A jazz trio is a group of three jazz musicians, often a piano trio comprising a pianist, a double bass player and a drummer. The pianist is usually considered the leader of these trios, and trios are usually named after their pianist.'
	},
	{
		questionText: 'Who is the author of "Kind of Blue", the highest-selling jazz album of all time?',
		answers: [
			{text: 'Charlie Parker', correct: false},
			{text: 'Louis Armstrong', correct: false},
			{text: 'Miles Davis', correct: true},
			{text: 'Duke Ellington', correct: false}	
		],
		explanation: 'Legendary jazz trumpeter Miles Davis recorded the second and final session of his seminal album Kind of Blue on April 22nd, 1959. The modal approach to jazz became so popular it changed the way jazz was taught and analyzed. This has justified the significance of the album for many players and aficionados.'
	},
	{
		questionText: 'What was the nickname of jazz trumpeter and singer, Louis Armstrong?',
		answers: [
			{text: 'Satchmo', correct: true},
			{text: 'Duke', correct: false},
			{text: 'Dizzy', correct: false},
			{text: 'Trane', correct: false}	
		],
		explanation: 'Satchmo is a shortened version of "satchel mouth" which refers to the size of his mouth. His last hit was "What a Wonderful World" which was released in 1967. It was a comment on the singer\'s wishes for a more peaceful future and was one of his most optimistic pieces of music.'
	},
	{
		questionText: 'Which Jazz musician at age 62 surpassed The Beatles at the top of the pop charts?',
		answers: [
			{text: 'Nina Simone', correct: false},
			{text: 'Ella Fitzgerald', correct: false},
			{text: 'Frank Sinatra', correct: false},
			{text: 'Louis Armstrong', correct: true}	
		],
		explanation: 'In late-1963, Armstrong recorded “Hello Dolly!” had soared to the top of the charts, displacing two songs by The Beatles, who were then at the height of their popularity. At age 62, Armstrong became the oldest musician in American history to have a number one song.'
	},
	{
		questionText: 'Legendary jazz singer Nina Simone was so talented that she started playing an instrument by ear at the age of three. What instrument was it?',
		answers: [
			{text: 'Guitar', correct: false},
			{text: 'Drums', correct: false},
			{text: 'Clarinet', correct: false},
			{text: 'Piano', correct: true}	
		],
		explanation: 'Nina’s prodigious talent as a musician was evident early on when she started playing piano by ear at the age of three. Her mother, a Methodist minister, and her father, a handyman and preacher himself, couldn’t ignore young Eunice’s God-given gift of music.'
	},
	{
		questionText: 'He was a well-dressed kid during the Great Depression. Which Jazz musician is he?',
		answers: [
			{text: 'Frank Sinatra', correct: true},
			{text: 'Thelonious Monk', correct: false},
			{text: 'Charles Mingus', correct: false},
			{text: 'Sonny Rollins', correct: false}	
		],
		explanation: 'During the Great Depression, his mother often supplied Sinatra with money to buy expensive clothes. For this, people often described him as the “best-dressed kid in the neighborhood.” Throughout his life, Sinatra would continue to be known for his impeccable sense of style.'
	},
	{
		questionText: '',
		answers: [
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: true}	
		],
		explanation: ''
	},
	{
		questionText: '',
		answers: [
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: true}	
		],
		explanation: ''
	},
	{
		questionText: '',
		answers: [
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: true}	
		],
		explanation: ''
	},
	{
		questionText: '',
		answers: [
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: false},
			{text: '', correct: true}	
		],
		explanation: ''
	}
]