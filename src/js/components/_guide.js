import slick from 'slick-carousel';
import {ACTIVE, PREV, OPEN, HIDDEN} from '../_constants';

;(() => {

	const directionPrev = 'prev';
	const directionNext = 'next';

	const duration = 300;
	const delay = 2000;

	$('[data-guide]').each((i, guide) => {
		guide = $(guide);
		//buttons
		const controls = guide.find('[data-guide-step]');
		const buttons = guide.find('[data-guide-direction]');
		const submit = $('[data-guide-submit]');
		const successClose = $('[data-success-close]');
		//items
		const container = guide.find('[data-guide-container]');
		const success = $('[data-success]');
		const loader = $('[data-loader]');
		//prgressbar
		const line = guide.find('[data-guide-line]');
		const offset = 100/(controls.length - 1);
		//form
		const forms = guide.find('[data-guide-form]');
		const formOpen = guide.find('[data-guide-form-open]');
		const formClose = guide.find('[data-guide-form-close]');
		//upgrade screen
		const upgrade = guide.find('[data-guide-upgrade]');

		//functionality
		formOpen.each((i, button) => {
			button = $(button);
			const form = forms.filter(`[data-guide-form="${button.data('guide-form-open')}"]`);

			button.on('click', e => {
				e.preventDefault();
				form.addClass(ACTIVE);
				upgrade.addClass(HIDDEN);
			});
		});

		formClose.each((i, button) => {
			button = $(button);
			const form = forms.filter(`[data-guide-form="${button.data('guide-form-close')}"]`);

			button.on('click', e => {
				e.preventDefault();
				form.removeClass(ACTIVE);
				upgrade.removeClass(HIDDEN);
			});
		});

		container.slick({
			infinite: false,
			arrows: false,
			swipe: false
		});

		container
			.on('beforeChange', (e, slick, prev, next) => {
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
			})
			.on('afterChange', (e, slick, current) => {
				success.hasClass(OPEN) && success.fadeOut(duration, () => success.removeClass(OPEN));
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

		submit.on('click', e => {
			e.preventDefault();
			loader.fadeIn(duration);

			setTimeout(function() {
				loader.fadeOut(duration);
				success.fadeIn(duration, () => {
					success.addClass(ACTIVE);
					forms.removeClass(ACTIVE);
				});
			}, delay);
		});

		successClose.on('click', e => {
			e.preventDefault();
			success.fadeOut(duration, () => success.removeClass(ACTIVE));
		});

		// controls.each((i, control) => {
		// 	control = $(control);
		// 	const step = control.data('guide-step');

		// 	control.on('click', e => {
		// 		e.preventDefault();
		// 		container.slick('slickGoTo', step);
		// 	});
		// });
	});


})();