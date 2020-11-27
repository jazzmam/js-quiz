'use strict';

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var containerElement = document.getElementById('container');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var controlsContainerElement = document.getElementById('controls-container');
var resultContainerElement = document.getElementById('result-container');
var answerExplanationElement = document.getElementById('answer-explanation');

var shuffledquestions = void 0,
    currentQuestionIndex = void 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', function () {
	currentQuestionIndex++;
	setNextQuestion();
});

function startGame() {
	startButton.classList.add('hide');
	shuffledquestions = questions.sort(function () {
		return Math.random() - .5;
	});
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
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	}answerExplanationElement.classList.add('hide');
}

function showQuestion(question) {
	questionElement.innerText = question.questionText;
	answerExplanationElement.innerText = question.explanation;
	controlsContainerElement.classList.add('hide');
	question.answers.forEach(function (answer) {
		var button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answerButtonsElement.appendChild(button);
	});
}

function selectAnswer(e) {
	Array.from(answerButtonsElement.children).forEach(function (button) {
		setStatusClass(button, button.dataset.correct);
	});

	if (shuffledquestions.length > currentQuestionIndex + 1) {
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

var questions = [{
	questionText: 'Which city is considered the birthplace of Jazz?',
	answers: [{ text: 'Chicago', correct: false }, { text: 'New York City', correct: false }, { text: 'Kansas City', correct: false }, { text: 'New Orleans', correct: true }],
	explanation: 'Jazz is a byproduct of the unique cultural environment found in New Orleans at the late 19th and early 20th centuries, with the vestiges of French and Spanish colonial roots, the legacy of African influences after the slavery era and the influx of immigrants from Europe. The ways these cultures mingled, collided and evolved together in the Crescent City produced America’s most distinctive musical style.'
}, {
	questionText: 'Which Jazz branch represented a significant transformation in Jazz’s history making jazz not only a dancing music but also music only for listening?',
	answers: [{ text: 'Cool Jazz', correct: false }, { text: 'Bebop', correct: true }, { text: 'Free Jazz', correct: false }, { text: 'Gypsy Jazz', correct: false }],
	explanation: 'Bebop developed as the younger generation of jazz musicians expanded the creative possibilities of jazz beyond the popular, dance-oriented swing style. It that was not as danceable and demanded close listening. As bebop was not intended for dancing, it enabled the musicians to play at faster tempos.'
}, {
	questionText: 'What instrument is not included to a traditional jazz trio?',
	answers: [{ text: 'Drums', correct: false }, { text: 'Saxophone', correct: true }, { text: 'Piano', correct: false }, { text: 'Bass', correct: false }],
	explanation: 'A jazz trio is a group of three jazz musicians, often a piano trio comprising a pianist, a double bass player and a drummer. The pianist is usually considered the leader of these trios, and trios are usually named after their pianist.'
}, {
	questionText: 'Who is the author of "Kind of Blue", the highest-selling jazz album of all time?',
	answers: [{ text: 'Charlie Parker', correct: false }, { text: 'Louis Armstrong', correct: false }, { text: 'Miles Davis', correct: true }, { text: 'Duke Ellington', correct: false }],
	explanation: 'Legendary jazz trumpeter Miles Davis recorded the second and final session of his seminal album Kind of Blue on April 22nd, 1959. The modal approach to jazz became so popular it changed the way jazz was taught and analyzed. This has justified the significance of the album for many players and aficionados.'
}, {
	questionText: 'What was the nickname of jazz trumpeter and singer, Louis Armstrong?',
	answers: [{ text: 'Satchmo', correct: true }, { text: 'Duke', correct: false }, { text: 'Dizzy', correct: false }, { text: 'Trane', correct: false }],
	explanation: 'Satchmo is a shortened version of "satchel mouth" which refers to the size of his mouth. His last hit was "What a Wonderful World" which was released in 1967. It was a comment on the singer\'s wishes for a more peaceful future and was one of his most optimistic pieces of music.'
}, {
	questionText: 'Which Jazz musician at age 62 surpassed The Beatles at the top of the pop charts?',
	answers: [{ text: 'Nina Simone', correct: false }, { text: 'Ella Fitzgerald', correct: false }, { text: 'Frank Sinatra', correct: false }, { text: 'Louis Armstrong', correct: true }],
	explanation: 'In late-1963, Armstrong recorded “Hello Dolly!” had soared to the top of the charts, displacing two songs by The Beatles, who were then at the height of their popularity. At age 62, Armstrong became the oldest musician in American history to have a number one song.'
}, {
	questionText: 'Legendary jazz singer Nina Simone was so talented that she started playing an instrument by ear at the age of three. What instrument was it?',
	answers: [{ text: 'Guitar', correct: false }, { text: 'Drums', correct: false }, { text: 'Clarinet', correct: false }, { text: 'Piano', correct: true }],
	explanation: 'Nina’s prodigious talent as a musician was evident early on when she started playing piano by ear at the age of three. Her mother, a Methodist minister, and her father, a handyman and preacher himself, couldn’t ignore young Eunice’s God-given gift of music.'
}, {
	questionText: 'He was a well-dressed kid during the Great Depression. Which Jazz musician is he?',
	answers: [{ text: 'Frank Sinatra', correct: true }, { text: 'Thelonious Monk', correct: false }, { text: 'Charles Mingus', correct: false }, { text: 'Sonny Rollins', correct: false }],
	explanation: 'During the Great Depression, his mother often supplied Sinatra with money to buy expensive clothes. For this, people often described him as the “best-dressed kid in the neighborhood.” Throughout his life, Sinatra would continue to be known for his impeccable sense of style.'
}, {
	questionText: 'One of the most important figures in twentieth century American music, a virtuoso bass player, accomplished pianist, bandleader and composer.',
	answers: [{ text: 'Frank Sinatra', correct: false }, { text: 'John Coltrane', correct: false }, { text: 'Charles Mingus', correct: true }, { text: 'Miles Davis', correct: false }],
	explanation: 'His earliest musical influences came from the church-- choir and group singing-- and from "hearing Duke Ellington over the radio when [he] was eight years old." He studied double bass and composition in a formal way while absorbing vernacular music from the great jazz masters, first-hand.'
}, {
	questionText: 'Which instrument in jazz functions as the bridge between rhythm and harmony—providing a strong beat and the root notes of the chords?',
	answers: [{ text: 'Trombone', correct: false }, { text: 'Drums', correct: false }, { text: 'Bass', correct: true }, { text: 'Trumpet', correct: false }],
	explanation: 'In jazz, bass is typically used for “comping” or accompanying other instruments, and sometimes for solos. From the 1920s and 1930s swing and big band era, through bebop and hard nop, to the 1960s-era “free jazz” movement, the resonant, woody sound of the double bass anchored everything from small jazz combos to large jazz groups. Electric bass began to emerge in the 1950s, and became especially popular during the jazz-rock fusion era of the 1970s.'
}, {
	questionText: 'Which instrument is an important tool of jazz musicians and composers for teaching and learning jazz theory?',
	answers: [{ text: 'Banjo', correct: false }, { text: 'Bass', correct: false }, { text: 'Saxophone', correct: false }, { text: 'Piano', correct: true }],
	explanation: 'The piano has been an integral part of the jazz idiom since its inception, in both solo and ensemble settings. Its role is multifaceted due largely to the instrument\'s combined melodic and harmonic capabilities. For this reason it is an important tool of jazz musicians and composers for teaching and learning jazz theory and set arrangement, regardless of their main instrument.'
}, {
	questionText: 'How is a stringed instrument with a circular membrane stretched over a frame form a resonator used in Jazz is called?',
	answers: [{ text: 'Guitar', correct: false }, { text: 'Banjo', correct: true }, { text: 'Bass', correct: false }, { text: 'Ukulele', correct: false }],
	explanation: 'When you listen to a number of early Jazz recordings of the late 1910s and the early-to-mid 1920s, you don\'t hear a rhythm guitar; rather, you hear a banjo. The banjo, often in counterpoint with a tuba\'s bass lines, provided a high amount of volume in bands, and could be picked up by early recording technology.'
}];