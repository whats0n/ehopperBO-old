import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;

import sortable from './lib/jquery-ui.min';

import './components/_modal';
import './components/_toggle';
import './components/_tabs';
import './components/_add-group';
import './components/_accordion';
import './components/_menu';
import './components/_select';
import './components/_multiSelect';
import './components/_dropdown';
import './components/_configurable';

import './components/_guide';
import './components/_videos';
import './components/_spinner';

import './components/_trigger';

console.log(sortable);

$('.js-sortable').sortable({
	placeholder: "products-sortable__placeholder",
	items: '.item:not(.js-sortable-disabled)',
	distance: 1
});
$('.js-sortable').disableSelection();