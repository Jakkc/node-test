// Dom Elements
const items = document.querySelectorAll('.gooey__item');
const rectangle = document.querySelector('.gooey__rectangle');
const container = document.querySelector('.gooey');
const active = document.querySelector('.active');
const itemsArray = Array.from(items);

// Co-ords
let rectCoords = active.getBoundingClientRect();
const containerCoords = container.getBoundingClientRect();
const containerOffset = window.getComputedStyle(container,null).getPropertyValue('padding-left').replace(/\D/g,'');

// Values + Other
let transVal;
let prevPosition = getArrayPosition(active);
const transDur = 0.4;
const scaleHeight = 0.25;
const scaleWidth = 0.7;
const transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';


function init(e) {
	const coords = {
		width: rectCoords.width,
		height: rectCoords.height,
		top: rectCoords.top + window.scrollY,
		left: (rectCoords.left + window.scrollX) - containerCoords.left - containerOffset
	}

	rectangle.style.width = `${coords.width}px`;
	rectangle.style.height = `${coords.height}px`;
	rectangle.style.left = `${coords.left}px`;
}

function getCoords(el) {
	const thisCoords = el.getBoundingClientRect();
	const newCoords = {
		width: Math.floor(thisCoords.width),
		height: Math.floor(thisCoords.height),
		left: Math.floor(thisCoords.left - containerCoords.left - containerOffset)
	}
	return newCoords;
} 

function getArrayPosition(el) {
	return itemsArray.indexOf(el);
}

function gooeyHandler(e) {
	const newCoords = getCoords(this);
	const currentPosition = getArrayPosition(this);
	transVal = transDur * Math.abs(currentPosition - prevPosition);
	updateRectanglePos(newCoords);
	rectangle.addEventListener('transitionend', () => afterTransition(this,newCoords),{once:true});
}

function updateRectanglePos(coords) {
	rectangle.style.left = ``;
	rectangle.style.width = `${coords.width}`;
	rectangle.style.transitionDuration = `${transVal}s`;
	rectangle.style.transform = `translateX(${coords.left}px)scale(${scaleWidth},${scaleHeight})`;
}

function afterTransition(item,coords) {
	items.forEach(item => item.classList.remove('active'));
	item.classList.add('active');
	rectangle.style.transform = `translateX(${coords.left}px)scale(1)`;
	prevPosition = getArrayPosition(item);
}

items.forEach(item => item.addEventListener('click',gooeyHandler));

init();