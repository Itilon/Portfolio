const { Router } = require('express');
const attachTo = (app, controllers) => {
    const router = new Router;

    const postController = controllers.postController;
    const userController = controllers.userController;

    router
        .get('/', (req, res) => {
            return res.render('home');
        })

        .get('/portfolio', (req, res) => {
            return res.render('portfolio');
        })

        .get('/about', (req, res) => {
            return res.render('about');
        })

        .get('/contact', (req, res) => {
            return res.render('contact');
        });

    app.use('/', router);
};

module.exports = {
    attachTo,
};
