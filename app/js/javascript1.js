const tl = gsap.timeline({ defaults: { duration: 1 } });
// const p = console.log;
const result = document.querySelector('.result');
const btnHolder = document.querySelector('.btn-holder');
const clear = document.getElementById('clear');

const avoidNull = arr => arr.filter(item => item !== 0);

const avoidLetters = targetNumber => {
	isNaN(targetNumber)
		? (result.innerHTML = 'No letters!')
		: (result.innerHTML = formatNumber(targetNumber));
};

// ********************************************************
// ********************************************************

function formatNumber(value) {
	value = Math.ceil(value * 100) / 100;
	value = value.toFixed(2);
	return value;
}
const start = () => {
	const startUp = document.getElementById('start');
	startUp.addEventListener('click', () => {
		const startupPage = document.querySelector('.start-up');
		startupPage.style.transform = 'translateY(-100%)';
		tl.from('input', { y: -300, opacity: 0, stagger: 0.4 }).from(
			'button',
			{ x: -800, opacity: 0, stagger: 0.4 },
			'-=2.4'
		);
	});
};
start();

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input[name]');

clear.addEventListener('click', () => {
	inputs.forEach(input => (input.value = ''));
	result.innerHTML = '';
	myNum = [];
});

btnHolder.addEventListener('click', e => {
	let target = e.target.id;
	let myNum = Array.from(inputs).map(num => Number(num.value));
	let sum = 0;
	switch (target) {
		case 'add':
			sum = myNum.reduce((a, c) => a + c);
			avoidLetters(sum);
			break;
		case 'substract':
			sum = myNum.reduce((a, c) => a - c);
			avoidLetters(sum);
			break;
		case 'multiply':
			sum = avoidNull(myNum).reduce((a, c) => a * c);
			avoidLetters(sum);
			break;
		case 'divide':
			sum = avoidNull(myNum).reduce((a, c) => a / c);
			avoidLetters(sum);
			break;
		case 'average':
			sum = avoidNull(myNum).reduce((a, c) => a + c);
			let avg = sum / avoidNull(myNum).length;
			avoidLetters(avg);
			break;
		case 'clear':
			inputs.forEach(input => (input.value = ''));
			result.innerHTML = '';
			myNum = [];
			break;
		default:
			result.innerHTML = 'Why you wandering around? Snap back here!';
	}
});
