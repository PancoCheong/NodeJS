var express = require('express');
var router = express.Router();  //create instant of router

/* 
handle GET HTTP method for root / path, ie. index.pug homepage. 
if path is matched, assign the handler function to process the request
*/
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Panco Express' });
// });
//
// use separate file to write handler function - can be reuse
// let home = require('../controllers/home');
// router.get('/', home.index);
//
// ./routes/index.js
let landing = require('../controllers/landing');
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads); //list of leads
router.get('/lead/:lead_id', landing.show_lead); //display individual lead
router.get('/lead/:lead_id/edit', landing.show_edit_lead); //display edit form
router.post('/lead/:lead_id/edit', landing.edit_lead); //submit edited data
router.post('/lead/:lead_id/delete', landing.delete_lead); //submit deleted lead id
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json); //use JS to implement delete lead


// export this instant to caller
module.exports = router;


