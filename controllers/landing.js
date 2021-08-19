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


//show individual lead
exports.show_lead = function(req, res, next) {
    models.Lead.findOne({
        where : {
            id : req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead: lead });
    })
}


//show edit lead
exports.show_edit_lead = function(req, res, next) {
    models.Lead.findOne({
        where : {
            id : req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead: lead });
    })
}


//submit edited lead
// from the HTML form: req.params.lead_id & req.body.lead_email
exports.edit_lead = function(req, res, next) {
    return models.Lead.update({
        email: req.body.lead_email
    }, {
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        res.redirect('/lead/' + req.params.lead_id);
    })
}


//submit deleted lead id
exports.delete_lead = function(req, res, next) {
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        res.redirect('/leads');
    })
}


//submit deleted lead id
exports.delete_lead_json = function(req, res, next) {
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        //res.redirect('/leads');
        res.send({
            msg: "Success"
        });
    })
}