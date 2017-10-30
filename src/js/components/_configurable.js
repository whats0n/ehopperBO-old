import { OPEN, $DOCUMENT } from '../_constants';
import inputmask from '../lib/jquery.inputmask';

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
		const $text = $this.find('.js-configurable-text');

		$this.click(() => {
			$this.addClass(OPEN);
			$input.focus();

			$activeInput = $input;
			activated = true;
		});
		$input
			// .blur(() => {
			// 	const val = $input.val();
			// 	$this.removeClass(OPEN);
			// 	if (!val.length) $text.text('0.00');
			// })
			// .on('input', () => $text.text($input.val()))
			.on({
				'focus': function(){ this.select() }
			})
			.inputmask("numeric", {
				radixPoint: ".",
				digits: 2,
				digitsOptional: false,
				rightAlign: false,
				prefix: '$'
			});

		$input.on('input', () => {})
	});

	$DOCUMENT.on('keyup', e => {
		if (!activated) return;
		if (e.keyCode !== keyboard.enter) return;
		activated = false;
		$activeInput.blur();
	});

})();