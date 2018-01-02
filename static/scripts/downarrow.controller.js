/* globals $ */

$(document).ready(() => {
    const $downArrow = $('.down-angle');

    $downArrow.click(() => {
        $('html, body').animate({ scrollTop: 660 }, 1600);
    });
});
