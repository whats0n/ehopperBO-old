import {ACTIVE, OPEN} from '../_constants';

export default (function() {

	const accordion = e => {
		const target = e.target;
		const btn = target.closest('.js-accordion-btn');

		if (!btn) return;
		
		e.preventDefault();

		const parent = btn.closest('.js-accordion');
		const containers = parent.querySelectorAll('.js-accordion-container');

		btn.classList.toggle(ACTIVE);

		if (!containers) return;

		Array.from(containers).forEach(container => {
			container.classList.toggle(OPEN);
		});
	};

	document.addEventListener('click', accordion, false)


})();