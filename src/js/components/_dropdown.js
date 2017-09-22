import {OPEN, smartClick} from '../_constants';

export default (function() {
	const dropdownClassName = '.js-dropdown';
	const openClassName = '.js-dropdown-open';

	smartClick(openClassName, function(e) {
		e.preventDefault();
		
		const $this = $(this);
		const $dropdown = $this.closest(dropdownClassName);
		const $dropdowns = $(dropdownClassName);

		if ($dropdown.hasClass(OPEN)) {
			$dropdowns.removeClass(OPEN);
		} else {
			$dropdowns.removeClass(OPEN);
			$dropdown.addClass(OPEN);
		}
	});

	smartClick('body', function(e) {
		
		const $target = $(e.target);
		const $dropdown = $target.closest(dropdownClassName);
		const $dropdowns = $(dropdownClassName);
		if ($dropdown.length || !$dropdowns.hasClass(OPEN)) return;
		$dropdowns.removeClass(OPEN);

	});

})();