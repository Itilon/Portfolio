/* globals $ */
const scrollHelper = ($this, htmlObjectName, className, xSroll) => {
    if ($this.scrollTop() >= xSroll) {
        $(htmlObjectName).removeClass(`${className}-hd`)
            .addClass(`${className}-show`);
    }

    $this.scroll(() => {
        if ($this.scrollTop() <= xSroll) {
            $(htmlObjectName).removeClass(`${className}-show`)
                .addClass(`${className}-hd`);
        } else {
            $(htmlObjectName).removeClass(`${className}-hd`)
                .addClass(`${className}-show`);
        }
    });
};

export { scrollHelper };
