const Data = require('./base/base.data');
const User = require('../models/user.model');

class UsersData extends Data {
    constructor(db) {
        super(db, User);
    }

    checkPassword(username, password) {
        return this.collection
        .findOne({
            username,
        })
        .then((user) => {
            if (!user) {
                throw new Error('Username is Invalid!');
            }

            if (user.password !== password) {
                throw new Error('Password is Invalid!');
            }

            return true;
        });
    }
}

module.exports = UsersData;
