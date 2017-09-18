import {ACTIVE, OPEN} from '../_constants';

export default (function() {

	const menu = e => {
		const target = e.target;
		const btn = target.closest('.js-menu-btn');
		const menu = document.querySelector('.js-menu');

		btn.classList.toggle(ACTIVE);
		menu.classList.toggle(OPEN);
	};

	document.addEventListener('click', menu, false)


})();