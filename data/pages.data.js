const Data = require('./base/base.data');
const Item = require('../models/page.model');

class PagesData extends Data {
    constructor(db) {
        super(db, Item, Item);
    }
}

module.exports = PagesData;
