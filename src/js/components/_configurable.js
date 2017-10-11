import { OPEN, $DOCUMENT } from '../_constants';

export default (function() {

	const $container = $('.js-configurable');
	const keyboard = {
		enter: 13
	};

	//active
	let activated = false;
	let $activeContainer = null;
	let $activeInput = null;

	$container.each(function() {
		
		const $this = $(this);
		const $input = $this.find('.js-configurable-input');
		const $btn = $this.find('.js-configurable-btn');
		const $text = $this.find('.js-configurable-text');

		$btn.click(() => {
			$this.addClass(OPEN);
			$input.focus();

			$activeInput = $input;
			activated = true;
		});
		$input
			.blur(() => $this.removeClass(OPEN))
			.on('input', () => $text.text($input.val()));
	});

	$DOCUMENT.on('keyup', e => {
		if (!activated) return;
		if (e.keyCode !== keyboard.enter) return;
		activated = false;
		$activeInput.blur();
	});


})();