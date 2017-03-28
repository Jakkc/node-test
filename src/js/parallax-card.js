const card = document.querySelector('.parallax-card');
const wrapper = document.querySelector('.parallax-card__wrapper');
const content = document.querySelector('.parallax-card__content-animation');
const bg = document.querySelector('.parallax-card__bg');
const shiny = document.querySelector('.parallax-card__shiny');
const mousePos = document.querySelector('.mousePos');

// Values
const rotationDeg = 6;
const transVal = 15;

function printMousePos(coords) {
	mousePos.innerHTML = `X: ${coords.posX} || Y: ${coords.posY}`;
}

function getMousePos(e) {
	const bgCoords = this.getBoundingClientRect();
	const coords = {
		posX: e.clientX - Math.round(bgCoords.left),
		posY: e.clientY - Math.round(bgCoords.top),
		width: bgCoords.width,
		height: bgCoords.height
	}
	printMousePos(coords);
	createObjectsByApplyingMathetmaticalComputations(coords);
}

function createObjectsByApplyingMathetmaticalComputations(coords) {
	const percentageY = coords.posY / coords.height;
	const percentageX = coords.posX / coords.width;
	const values = {
		rotate: {
			Y: (percentageY * (rotationDeg * 2)) - rotationDeg,
			X: (percentageX * (rotationDeg * 2)) - rotationDeg
		},
		translate: {
			Y: (percentageY * (transVal * 2)) - transVal,
			X: (percentageX * (transVal * 2)) - transVal,
		}
	}
	applyVisualTransformationsToHyperTextElements(values);
}

function applyVisualTransformationsToHyperTextElements(values) {
	removeTransitions();
	shiny.style.transform = `
		translateX(${values.translate.X}px)
		translateY(${values.translate.Y}px)
		rotateX(${values.rotate.X}deg)
		rotateY(${values.rotate.Y}deg)`;
	content.style.transform = `
		translateX(${values.translate.Y / 5}px)
		translateY(${values.translate.X / 5}px)`;
	bg.style.transform = `
		rotateY(${values.rotate.Y}deg)
		rotateX(${values.rotate.X}deg)`;
	card.style.transform = `rotateY(${values.rotate.Y})`;
}

function addTransitions() {
	card.style.transition = 'transform 0.4s ease-in';
	bg.style.transition = 'transform 0.4s ease-in';
	card.style.transform = 'rotate(0)';
	bg.style.transform = 'rotate(0)';
	shiny.style.transform = '';
}

function removeTransitions() {
	card.style.transition = '';
	bg.style.transition = '';
	shiny.style.transition = '';
}

card.addEventListener('mousemove',getMousePos);
card.addEventListener('mouseout',addTransitions);