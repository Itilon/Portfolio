/* globals $ */

$(document).ready(() => {
    // eslint-disable-next-line no-invalid-this
    const $this = $(this);

    const icon = '.img-container i';
    const iconClass = 'fa';

    if ($this.scrollTop() >= 100) {
        $(icon).removeClass(`${iconClass}-hd`)
            .addClass(`${iconClass}-show`);
    }

    $this.scroll(() => {
        if ($this.scrollTop() <= 100) {
            $(icon).removeClass(`${iconClass}-show`)
                .addClass(`${iconClass}-hd`);
        } else {
            $(icon).removeClass(`${iconClass}-hd`)
                .addClass(`${iconClass}-show`);
        }
    });
});
