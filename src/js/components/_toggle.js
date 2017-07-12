import {OPEN, ACTIVE} from '../_constants';

export default (function() {

	document.addEventListener('click', e => {
		const target = e.target;
		const btn = target.closest('.js-toggle-btn');

		if (!btn) return;

		const parent = btn.closest('.js-toggle');
		const container = parent.querySelector('.js-toggle-container');

		if (!!container) {
			container.classList.toggle(OPEN);
			btn.classList.toggle(ACTIVE)
		}
	});

})();