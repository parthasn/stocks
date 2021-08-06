const cheerio = require('cheerio')
const axios = require('axios');

const print = console.log

var testHandler = exports.handler =  async function(event, context) {
    print(await getStockDetails(event))
    return context.logStreamName
}

function getStockDetails(stockId) {
    return (axios.get(`https://www.screener.in/company/${stockId}/consolidated/`))
    .then((response) => {
        const html = cheerio.load(response.data);

        const rawRatios = []
        html('li', '#top-ratios').each((i, el) => {
          const stringValues = html(el).text().split('\n').filter(x => x.trim() !== '')
          const key = stringValues.slice(0,1).join('').trim()
          const value = stringValues.slice(1, stringValues.length)
          rawRatios.push(value)
        })

        ratios = {}
        const getMarketCap = () => rawRatios[0][1].trim()
        const getPe = () => rawRatios[3][0].trim()
        ratios['marketCap'] = getMarketCap()
        ratios['pe'] = getPe()
        return ratios
      })
  }

testHandler("ITC")