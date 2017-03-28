(function() {
	const mousePos = document.querySelector('.mousePos');

	function mouseMove(e) {
		console.log(e);
		mousePos.innerHTML = `clientY: ${e.clientY} || clientX: ${e.clientX} || innerHeight: ${e.view.innerHeight} `;
		// offsetY: ${e.offsetY} || offsetX: ${e.offsetX} || screenX: ${e.screenX} || screenY: ${e.screenY}


	}

	//window.addEventListener('mousemove',mouseMove);
})();