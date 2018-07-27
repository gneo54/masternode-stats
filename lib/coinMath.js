function computeCoinTotal(coinData) {

    return new Promise(function (resolve, reject) {

        coinData.coinTotalWorth = coinData.coinPrice * coinData.coinTotal
        resolve(coinData)

    })
}


module.exports = {

    computeCoinTotal: computeCoinTotal
}