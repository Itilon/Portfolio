/* globals __dirname */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const init = (data) => {
    const app = express();

    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/static', express.static(
        path.join(__dirname, '../static'))
    );

    app.use('/libs', express.static(
        path.join(__dirname, '../node_modules'))
    );

    app.get('/', (req, res) => {
        return res.render('home');
    });

    return Promise.resolve(app);
};

module.exports = {
    init,
};
