import {OPEN} from '../_constants';

export default (function() {

	const modal = {
		_getModal(target) {
			return [...document.querySelectorAll(`[data-modal-container="${target}"]`)];
		},
		show(e, btn) {
			e.preventDefault();
			const target = btn.getAttribute('data-modal-target');
			const modals = this._getModal(target);
			if (!modals.length) return;
			modals.forEach(modal => modal.classList.add(OPEN));
		},
		hide(e, btn) {
			e.preventDefault();
			const target = btn.getAttribute('data-modal-close');
			const modals = this._getModal(target);
			if (!modals.length) return;
			modals.forEach(modal => modal.classList.remove(OPEN));
		}
	};
	
	document.addEventListener('click', e => {
		const target = e.target;
		const close = target.closest('[data-modal-close]');
		const open = target.closest('[data-modal-target]');
		if (open) return void(modal.show(e, open));
		if (close) return void(modal.hide(e, close));
	});

})();