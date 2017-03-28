(function() {
	const mousePos = document.querySelector('.mousePos');
	const items = document.querySelectorAll('[data-js="parallax.item"]');	
	const innerHeight = window.innerHeight;
	let prevScroll = 0;

	function handler(e) {
		const scrollY = window.scrollY;
		const direction = getScrollDirection(scrollY);
		items.forEach(item => {
			const topPercent = (((item.offsetTop - scrollY) / innerHeight) * 100).toFixed(3);
			applyTransformations(item,topPercent);
			revealContent(item,topPercent);
		});
		prevScroll = window.scrollY;
	}

	function getScrollDirection(scrollY) {
		if(scrollY > prevScroll) return 'down';
		if(scrollY < prevScroll) return 'up';
	}

	function applyTransformations(item,percent) {
		const img = item.querySelector('.parallax-scroll__img');
		img.style.transform = `translateY(${percent / 4}%)`;
	}

	function revealContent(item,percent) {
		if(percent < 70 && percent > 0) item.classList.add('active');
		if(percent > 70 || percent < -30) item.classList.remove('active');
	}

	window.addEventListener('scroll',handler);
})()