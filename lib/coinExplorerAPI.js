var request = require('request')

function getCoinTotal(coinData) {

    return new Promise(function (resolve, reject) {

        request(coinData.ceURL, function (error, response, body) {

            let localNghCoinTotal = body

            console.log('Coin Total: ', localNghCoinTotal) // Print the HTML for the Google homepage.
            coinData.coinTotal = localNghCoinTotal
            resolve(coinData)
        })
    })
}

module.exports = {

    getCoinTotal: getCoinTotal
}