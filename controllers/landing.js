// ./controllers/landing.js
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Panco Landing Page' });
}

