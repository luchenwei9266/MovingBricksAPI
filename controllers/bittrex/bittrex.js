const wrap = require('co-express');
const request = require('co-request');
const crypto = require('crypto');
const path = require('path');
const bittrex = require('../../key');

exports.getMarksummaries = wrap(function*(req, res) {
  let marketList = [];
  bittrex.getmarketsummaries( function( data, err ) {
    if (err) {
      res.send(err);
    }
    for( var i in data.result ) {
      bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
        marketList.push(ticker);
        res.send(marketList);
        // console.log( ticker );
      });
    }
  });
  
});

