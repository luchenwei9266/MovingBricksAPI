'use strict';
var router = require('express').Router();
var bittrexObj = require("../controllers/bittrex/bittrex");

router.get('/', bittrexObj.getMarksummaries);

module.exports = router;

 