const Data = require('./base/base.data');
const Item = require('../models/item.model');

class ItemsData extends Data {
    constructor(db) {
        super(db, Item);
    }
}

module.exports = ItemsData;
