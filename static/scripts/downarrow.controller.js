/* globals $ */

$(document).ready(() => {
    // eslint-disable-next-line no-invalid-this
    const $downArrow = $('.down-angle');

    $downArrow.click(() => {
        $('html, body').animate({ scrollTop: 540 }, 2000);
    });
});
