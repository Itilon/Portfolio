module.exports = (data) => {
    const getHome = (req, res) => {
        data.pages.getAll()
            .then((pages) => {
                data.projects.getAll()
                    .then((projects) => {
                        res.render('home', {
                            pages: pages,
                            projects: projects,
                        });
                    });
            });
    };

    const getPortfolio = (req, res) => {
        res.render('portfolio');
    };

    const getAbout = (req, res) => {
        res.render('about');
    };

    const getContact = (req, res) => {
        res.render('contact');
    };

    return {
        getHome,
        getPortfolio,
        getAbout,
        getContact,
    };
};
