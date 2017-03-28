const anchors = document.querySelectorAll('a');
const transition = document.querySelector('[data-js="transition"]');
const transitionBottom = document.querySelector('[data-js="transition.bottom"]');
const container = document.querySelector('[data-js="transition.container"]');

function triggerTransition(e) {
	e.preventDefault();
	transition.classList.add('active');
	container.classList.add('transition');
}

function endTransition() {
	console.log('hello excuse me the transition finished thx');
}

anchors.forEach(anchor => anchor.addEventListener('click',triggerTransition))
transitionBottom.addEventListener('transitionend',endTransition);
