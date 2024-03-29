var express = require('express');

var calculator = require('./calculator');

var router = express.Router();

//middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/calculate').post(calculator.calculate);

module.exports = router;