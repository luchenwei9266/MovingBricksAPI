const wrap = require('co-express');
const request = require('co-request');
const crypto = require('crypto');
const path = require('path');
const bittrex = require('../../key');

exports.getMarksummaries = wrap(function*(req, res) {
  // let marketList = [];
  // bittrex.getmarketsummaries( function( data, err ) {
  //   if (err) {
  //     res.send(err);
  //   }
  //   for( var i in data.result ) {
  //     bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
  //       // marketList.push(ticker);
  //       // res.send(marketList);
  //       console.log( ticker );
  //     });
  //   }
  // });
  
  // 
  // 

  /* 
    获取某个交易对的当前价格，排列最前方的买卖挂单
    bittrex.getticker({market: 'BTC-NEO'},function(data,err){
      res.send(data);
    })
  */

  /* 
    获取当前账户的信息，包括区块链资产名，余额，钱包地址
    bittrex.getbalances(function(data,err) {
      res.send(data);
    })
  */
  bittrex.getorderbook({ market : 'BTC-LTC', depth : 1, type : 'both' }, function( data, err ) {
    res.send( data );
  });

});

