// ./controllers/home.js
exports.index = function(req, res, next) {
    res.render('index', { title: 'Panco New Home Express' });
}

