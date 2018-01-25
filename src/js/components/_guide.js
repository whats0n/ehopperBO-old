import slick from 'slick-carousel';
import {ACTIVE, PREV} from '../_constants';

;(() => {

	const directionPrev = 'prev';
	const directionNext = 'next';

	$('[data-guide]').each((i, guide) => {
		guide = $(guide);
		//buttons
		const controls = guide.find('[data-guide-step]');
		const buttons = guide.find('[data-guide-direction]');
		//items
		const container = guide.find('[data-guide-container]');
		//prgressbar
		const line = guide.find('[data-guide-line]');

		const offset = 100/(controls.length - 1);

		container.slick({
			infinite: false,
			arrows: false,
			swipe: false
		});

		container.on('beforeChange', (e, slick, prev, next) => {
			const control = controls.filter(`[data-guide-step="${next}"]`);
			const allPrevControls = control.prevAll('[data-guide-step]');
			const allNextControls = control.nextAll('[data-guide-step]');
			
			allNextControls
				.removeClass(PREV)
				.removeClass(ACTIVE);
			control
				.removeClass(PREV)
				.addClass(ACTIVE);
			allPrevControls
				.removeClass(ACTIVE)
				.addClass(PREV);

			const linePositionX = offset*next - 100;
			line.css('transform', `translate3d(${linePositionX}%,0,0)`);

		});

		buttons.each((i, button) => {
			button = $(button);
			const direction = button.data('guide-direction');

			button.on('click', e => {
				e.preventDefault();
				switch (direction) {
					case directionPrev:
						container.slick('slickPrev');
						return;
					case directionNext: 
						container.slick('slickNext');
						return;
				};
			});
		});

		controls.each((i, control) => {
			control = $(control);
			const step = control.data('guide-step');

			control.on('click', e => {
				e.preventDefault();
				container.slick('slickGoTo', step);
			});
		});
	});

})();