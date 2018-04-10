$('.js-trigger-checkbox').on('change', e => {
	const target = $(e.currentTarget);
	const state = target.prop('checked');
	target
		.closest('.js-trigger')
		.find('.js-trigger-input')
		.attr('disabled', !state);
});