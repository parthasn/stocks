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
    // return (axios.get(`https://www.screener.in/company/${stockId}/consolidated/`))
    return fs.readFile('scratch/itc.html', (err, data) => {
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
        getOPMDetails(stockId)
        getNPMDetails(stockId) 
        print(ratios)
        return ratios
    })
    
  }

  function getOPMDetails(stockId) {
    return fs.readFile('scratch/itc.html', (err, data) => {
        const html = cheerio.load(data);

        const year = []
        const OPM = []
        html('thead:first-child tr th', '#profit-loss').each((i, el) => {
          const stringValues = html(el).text().split('\n').filter(x => x.trim() !== '')
          year.push(stringValues)
        })
        html('tbody:nth-child(2) tr:nth-child(4) td', '#profit-loss').each((i, el) => {
          const stringValues = html(el).text().split('\n').filter(x => x.trim() !== '')
          OPM.push(stringValues)
        })

        const finalOPM = []

        totalLength = year.length;
        for(let i = 1; i < totalLength; i++){
          finalOPM.push({[year[i]]: OPM[i][0]})
        }
        console.log(finalOPM)
        return finalOPM;
    })
    
  }

  function getNPMDetails(stockId) {
    return fs.readFile('scratch/itc.html', (err, data) => {
        const html = cheerio.load(data);

        const year = []
        const NPM = []
        html('thead:first-child tr th', '#profit-loss').each((i, el) => {
          const stringValues = html(el).text().split('\n').filter(x => x.trim() !== '')
          year.push(stringValues)
        })
        html('tbody:nth-child(2) tr:nth-child(10) td', '#profit-loss').each((i, el) => {
          const stringValues = html(el).text().split('\n').filter(x => x.trim() !== '')
          NPM.push(stringValues)
        })

        const finalNPM = []

        totalLength = year.length;
        for(let i = 1; i < totalLength; i++){
          finalNPM.push({[year[i]]: NPM[i][0]})
        }
        console.log(finalNPM)
        return finalNPM;
    })
    
  }

testHandler("ITC")
