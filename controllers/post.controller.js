module.exports = (data) => {
    const getHome = (req, res) => {
        res.render('home');
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
