import {OPEN, ACTIVE} from '../_constants';

export default (function() {

	const filter = (items, attribute) => items.filter(item => item.getAttribute(attribute));

	document.addEventListener('click', e => {
		
		const target = e.target.closest(`[data-tabs-btn]`);
		
		if (!target) return;

		e.preventDefault();

		const current = e.target.getAttribute(`data-tabs-btn`);
		const collection = e.target.getAttribute(`data-tabs-collection`);

		const items = [...document.querySelectorAll(`[data-tabs-collection="${collection}"]`)];

		if (!items.length) return;

		const btns = filter(items, `data-tabs-btn`);
		const containers = filter(items, `data-tabs-container`);
		const currentContainer = containers.filter(container => container.getAttribute(`data-tabs-container`) === current)[0];

		if (!currentContainer || target.classList.contains(ACTIVE)) return;

		btns.forEach(btn => btn.classList.remove(ACTIVE));
		containers.forEach(container => container.classList.remove(OPEN));

		target.classList.add(ACTIVE);
		currentContainer.classList.add(OPEN);
	});

})();