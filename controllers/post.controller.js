module.exports = (data) => {
    const getHome = (req, res) => {
        data.pages.getAll()
            .then((pages) => {
                res.render('home', {
                    model: pages,
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
