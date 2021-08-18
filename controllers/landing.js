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
        res.redirect('/leads');
    })
}

//show leads
exports.show_leads = function(req, res, next) {
    //then return an object named leads
    // findAll() is executed async
    // this is a promise here - the leads object is guaranteed that is existed inside current {} scope
    // leads object contains the rows from database table
    // define leads object that pass into landing page
    models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Panco Landing Page', leads: leads });
    })
}
