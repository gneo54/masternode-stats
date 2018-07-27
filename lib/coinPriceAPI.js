var cheerio = require('cheerio')
var request = require('request')
function getCoinPrice(coinData) {

    return new Promise(function (resolve, reject) {

        if (coinData.IsLCW){
            request(coinData.lcwURL, function (error, response, body) {

                //console.log('Total: ', body); // Print the HTML for the Google homepage.
                let $ = cheerio.load(body)
                let localNghPrice = $('#usd.sub.header.price.colored').html().substr(1)
                console.log('USD Price: ', localNghPrice)
                coinData.coinPrice = localNghPrice
                resolve(coinData)
            })
        }
        else if (coinData.IsMNOnline){

            request(coinData.mnoURL, function(error,response, body){
                let $ = cheerio.load(body)
                let localNghPrice = $('.table.table-striped.table-hover > tbody > tr:nth-child(2) > td:first-child').html().substr(1)
                console.log('USD Price: ', localNghPrice)
                coinData.coinPrice = localNghPrice
                resolve(coinData)
                
            })
        }
        else{

        }
      
    })

}


module.exports = {

    getCoinPrice: getCoinPrice
}