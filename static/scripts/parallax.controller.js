/* globals $ */

import { scrollHelper } from './helpers/scroll.helper.js';

$(document).ready(() => {
    // eslint-disable-next-line no-invalid-this
    const $this = $(this);

    const image = '.project-container img';
    const imageClass = 'project-image';
    const xScroll = 640;

    scrollHelper($this, image, imageClass, xScroll);
});
