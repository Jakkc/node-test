(function(){
	const btn = document.querySelector('.btn--primary');
	const btnSVG = btn.querySelector('.btn__svg');
	const btnInner = btn.querySelector('.btn__inner');
	const speed = 300;
	const easing = mina.easeInExpo;
	const s = Snap(btnSVG);
	const path = s.select('path');
	const pathConfig = {
		from: path.attr('d'),
		mid: 'M8.13151629e-20,70 L8.13151629e-20,60 C8.13151629e-20,60 3.65818339e-14,27.0500866 61.044396,9.98577642 C82.3747836,4.02309394 111.158524,2.21979748e-15 150,0 C189.121775,0 218.040128,4.08136866 239.416232,10.1151675 C300,27.216051 300,60 300,60 L300,70 L8.13151629e-20,70 Z',
		mid2: 'M8.13151629e-20,70 L8.13151629e-20,35 C8.13151629e-20,35 4.49085066e-14,17.0500866 61.044396,-0.0142235786 C82.3747836,-5.97690606 111.158524,-10 150,-10 C189.121775,-10 218.040128,-5.91863134 239.416232,0.115167512 C300,17.216051 300,35 300,35 L300,70 L8.13151629e-20,70 Z',
		to: 'M-3.55271368e-15,70 C-3.55271368e-15,70 -20.2187565,27.1058814 -10,5 C0.218756484,-17.1058814 9.95560404,-32.9356899 71,-50 C92.3303877,-55.9626825 111.158524,-61 150,-61 C189.121775,-61 207.623896,-56.0337989 229,-50 C289.583768,-32.8991165 296.02578,-25.9216786 310,5 C323.97422,35.9216786 300,70 300,70 L-3.55271368e-15,70 Z'
	}

	function getEntryPos(e) {
		const elCoords = btn.getBoundingClientRect();
		return Math.round(((e.clientY - Math.round(elCoords.top)) / elCoords.height) * 100);
	}

	function handler(e) {
		if(getEntryPos(e) <= 50) btnInner.style.transform = 'rotate(180deg)';
		if(getEntryPos(e) > 50) btnInner.style.transform = 'rotate(0)';
		e.type == 'mouseenter' ? pathTo(btn) : pathFrom(btn);
	}

	function pathTo(e) {
		path.stop();
		path.animate({ 
			'd': pathConfig.mid
		}, speed, easing, midPoint);
	}

	function midPoint() {
		path.animate({ 
			'd': pathConfig.mid2
		}, speed / 4, easing, toEnd);
	}

	function toEnd() {
		path.animate({
			'd': pathConfig.to
		}, speed / 4, easing);
	}

	function pathFrom() {
		path.stop();
		path.animate({
			'd': pathConfig.from
		}, speed, easing);
	}

	btn.addEventListener('mouseenter',handler);
	btn.addEventListener('mouseout',handler);

})()