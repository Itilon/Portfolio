const Data = require('./base/base.data');
const Project = require('../models/project.model');

class ProjectsData extends Data {
    constructor(db) {
        super(db, Project, Project);
    }
}

module.exports = ProjectsData;
