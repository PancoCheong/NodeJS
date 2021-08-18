// ./controllers/landing.js
const models = require('../models')


exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Panco Landing Page' });
}

// use body.parser or express.urlencoded package to extract data from HTML
// redirect back to home page
exports.submit_lead = function(req, res, next) {
    console.log("lead email:", req.body.lead_email);
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/');
    })
}
