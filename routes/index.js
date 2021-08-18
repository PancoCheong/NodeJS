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
router.get('/leads', landing.show_leads);

// export this instant to caller
module.exports = router;


