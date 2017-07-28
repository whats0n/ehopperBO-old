export default (function() {

	document.addEventListener('click', e => {
		const target = e.target;
		if (!target.closest('.js-add-group')) return;
		e.preventDefault();

		const template = document.getElementById('modifier-group');
		const parent = document.querySelector('.js-add-group-parent');
		const wrapper = document.createElement('div');
		wrapper.innerHTML = template.innerHTML;
		const element = wrapper.querySelector('div');

		parent.insertBefore(element, document.querySelector('.js-add-group-before'));

	}, false);

})();