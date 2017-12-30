/* globals $ */

$(document).ready(() => {
    // eslint-disable-next-line no-invalid-this
    const $this = $(this);

    let previousTop = 0;

    const duration = 1600;
    const navigation = '.navigation';

    $this.scroll(() => {
        const currentTop = $this.scrollTop();
        if (currentTop <= previousTop) {
            $(navigation).fadeIn(duration);
        } else {
            $(navigation).fadeOut(duration);
        }

        previousTop = currentTop;
    });
});
