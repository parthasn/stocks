const cheerio = require('cheerio')
const axios = require('axios');

const print = console.log

var testHandler = exports.handler =  async function(event, context) {
    print("EVENT: \n" + JSON.stringify(event, null, 2))
    await getItcPrice().then((b) => print(b))
    return context.logStreamName    
}

function getItcPrice() {
    return (axios.get('https://www.screener.in/company/ITC/consolidated/'))
    .then((response) => {
        const html = cheerio.load(response.data);
        const ratios = {}
        html('li', '#top-ratios').each((i, el) => {
          const stringValues = html(el).text().split('\n').filter(x => x.trim() !== '')
          const key = stringValues.slice(0,1).join('').trim()
          const value = stringValues.slice(1, stringValues.length)
          ratios[key] = value
        })
        
        return ratios
      })
  }

testHandler("Infy")