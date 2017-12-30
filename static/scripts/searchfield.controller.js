/* globals $ */

$(document).ready(() => {
    let isOpen = false;

    const $searchboxContainer = $('#searchbox-container');
    const $searchbox = $('#searchbox-container form');
    const $searchboxInput = $('#searchbox-container input');

    const containerClass = 'searchbox-container';
    const searchboxClass = 'searchbox';
    const inputClass = 'searchbox-input';

    $('#search-icon').click(() => {
        if (isOpen) {
            $searchboxContainer
                .removeClass(containerClass)
                .addClass(`${containerClass}-hd`);

            $searchbox
                .removeClass(searchboxClass)
                .addClass(`${searchboxClass}-hd`);

            $searchboxInput
                .removeClass(inputClass)
                .addClass(`${inputClass}-hd`);

            isOpen = false;
        } else {
            $searchboxContainer
                .removeClass(`${containerClass}-hd`)
                .addClass(containerClass);

            $searchbox
                .removeClass(`${searchboxClass}-hd`)
                .addClass(searchboxClass);

            $searchboxInput
                .removeClass(`${inputClass}-hd`)
                .addClass(inputClass);

            isOpen = true;
        }
    });
});
