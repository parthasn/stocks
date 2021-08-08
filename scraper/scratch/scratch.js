const cheerio = require('cheerio')
const axios = require('axios');
const fs = require('fs');

const print = console.log

var testHandler = exports.handler =  async function(event, context) {
    // print("EVENT: \n" + JSON.stringify(event, null, 2))
    const ratios = await getStockDetails(event)
    // console.log(ratios)
    // return context.logStreamName    
}

function getStockDetails(stockId) {
    return (axios.get(`https://www.screener.in/company/${stockId}/consolidated/`))
    fs.readFile('itc.html', (err, data) => {
        const html = cheerio.load(data);

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
        print(ratios)
        return ratios
    })
    
  }

testHandler("ITC")