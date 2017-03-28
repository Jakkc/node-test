(function() {
	function init() {
		var mid = 'M-5.42101086e-20,70 L-5.42101086e-20,60 C-5.42101086e-20,60 -5.42101086e-20,26.8791605 51.2666739,9.85348839 C69.001749,3.96366659 92.8720551,2.20334155e-15 125,0 C157.365483,0 181.35077,4.02249408 199.125694,9.9844428 C250,27.0483697 250,60 250,60 L250,70 L-5.42101086e-20,70 Z';
		var mid2 = 'M-3.35877159e-14,70 L1.00896552e-13,31 C1.00896552e-13,31 1,-4.16333634e-14 27,-3.77475828e-14 C54.1994407,-3.38314446e-14 92.8720551,-3.96904731e-14 125,-4.16333634e-14 C157.365483,-4.16333634e-14 190.463802,-3.43508208e-14 218,-3.8719028e-14 C250,-4.45905165e-14 250,31 250,31 L250,70 L-3.35877159e-14,70 Z';
		var end = 'M-1,70.28 L-8,70 C-8,70 -51.6768073,16.8818775 -3.55271368e-14,-0.28 C17.8769557,-6.21694037 92.6150316,-28 125,-28 C157.624407,-28 232.082877,-6.28964432 250,-0.28 C301.2813,16.9204384 257,70 257,70 L251,70.28 L-1,70.28 Z';
		var speed = 500;
		var easing = mina.easeInExpo;
		var containers = document.querySelectorAll('.hover-svg');

		containers.forEach(function(el) {
			var s = Snap(el.querySelector('.hover-svg__item'));
			var path = s.select('path');
			var pathConfig = {
				from: path.attr('d'),
				mid: mid,
				mid2: mid2,
				to: end
			}

			function pathTo(e) {
				path.animate({ 
					'd': pathConfig.mid
				}, speed / 2, easing, midPoint);
				el.classList.add('active');
			}

			function midPoint() {
				path.animate({'d':pathConfig.mid2}, speed / 2, easing, midPoint2);
			}

			function midPoint2() {
				path.animate({'d':pathConfig.to}, speed / 2, easing);
			}

			function pathFrom(e) {
				path.stop();
				path.animate( { 'path': pathConfig.from }, speed / 2, easing);
				el.classList.remove('active');
			}

			el.addEventListener('mouseenter',pathTo);
			el.addEventListener('mouseleave',pathFrom);
		});
	}

	init();
})();