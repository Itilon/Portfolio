const { Router } = require('express');
const attachTo = (app, controllers) => {
    const router = new Router;

    const postController = controllers.postController;
    const userController = controllers.userController;

    router
        .get('/', postController.getHome)

        .get('/portfolio', postController.getPortfolio)

        .get('/about', postController.getAbout)

        .get('/contact', postController.getContact);

    app.use('/', router);
};

module.exports = {
    attachTo,
};
