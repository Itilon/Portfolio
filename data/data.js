const PagesData = require('./pages.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        pages: new PagesData(db),
        users: new UsersData(db),
    });
};

module.exports = {
    init,
};
