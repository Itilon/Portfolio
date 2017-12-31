const PagesData = require('./pages.data');
const ProjectsData = require('./projects.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        pages: new PagesData(db),
        projects: new ProjectsData(db),
        users: new UsersData(db),
    });
};

module.exports = {
    init,
};
