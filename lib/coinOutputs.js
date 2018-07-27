
async function logIntro(coinData) {
    return new Promise(function (resolve, reject) {
        console.log(coinData.mnName)
        resolve(coinData)
    })
}



async function logSummary(coinData) {

    return new Promise(function (resolve, reject) {

        console.log(coinData.coinTotalWorth)
        resolve(coinData)

    })
}


module.exports = {

    logSummary: logSummary,
    logIntro: logIntro

}