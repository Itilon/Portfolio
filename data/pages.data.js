const Data = require('./base/base.data');
const Page = require('../models/page.model');

class PagesData extends Data {
    constructor(db) {
        super(db, Page, Page);
    }
}

module.exports = PagesData;
