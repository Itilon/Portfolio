/* globals $ */

import { scrollHelper } from './helpers/scroll.helper.js';

$(document).ready(() => {
    // eslint-disable-next-line no-invalid-this
    const $this = $(this);

    const icon = '.img-container i';
    const iconClass = 'fa';
    const xScroll = 100;

    scrollHelper($this, icon, iconClass, xScroll);
});
