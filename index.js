var q = require('q')
var ccxt = require('ccxt')
var request = require('request')
var cheerio = require('cheerio')
var coinExplorerAPI = require('./lib/coinExplorerAPI')
var liveCoinWatchAPI = require('./lib/coinPriceAPI')
var coinMath = require('./lib/coinMath')
var coinOutputs = require('./lib/coinOutputs')

var coinDatum = require('./config/masternodes.json')


//var theResults = [];

//q.all(promises).then(function (result) {
    for (let i = 0; i < coinDatum.length; i++) {
        
        let coinData = coinDatum[i]
        console.log(coinData)
        doPromises(coinData)
    }
//})




/*let coinData = {
    mnName: 'Henga (HGN) MN1',
    IsLCW: true,
    lcwURL: 'https://www.livecoinwatch.com/price/Henga-NGH',
    ceURL:  'http://explorer.henga.io/ext/getbalance/HHj9a3mGZogXpFsT8kZtrFs4xqvJLfJdpp'
}
*/

//Q.all(promises).spread()
/*
  
*/

async function doPromises(coinData) {
    await coinOutputs.logIntro(coinData)
        .then(coinExplorerAPI.getCoinTotal)
        .then(liveCoinWatchAPI.getCoinPrice)
        .then(coinMath.computeCoinTotal)
        .then(coinOutputs.logSummary)
}