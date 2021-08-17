// ./controllers/landing.js
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Panco Landing Page' });
}

// use body.parser or express.urlencoded package to extract data from HTML
// redirect back to home page
exports.submit_lead = function(req, res, next) {
    console.log("lead email:", req.body.lead_email);
    res.redirect('/');
}
