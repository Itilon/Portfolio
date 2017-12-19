/* eslint-disable no-console */

const async = () => {
    return Promise.resolve();
};

const { port, connectionString } = require('./config');

async()
    .then(() => require('./db').init(connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(port, () => console.log(`Server starts at: ${port}!`));
    });
