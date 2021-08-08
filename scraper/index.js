const cheerio = require('cheerio')
const axios = require('axios');
const AWS = require('aws-sdk');
const s3 = new AWS.S3()

const print = console.log

var testHandler = exports.handler =  async function(event, context) {
    const ratios = await getStockDetails(event);
    print(ratios)
    await saveToS3(ratios)
    // return context.logStreamName
}

async function saveToS3(data) {
    const s3Bucket = 'stock-ui-bucket';
    const objectName = 'data/' + data.stockId;
    const objectType = 'application/json';

    const params = {
       Bucket: s3Bucket,
       Key: objectName,
       Body: JSON.stringify(data),
       ContentType: objectType,
    };

    const result = await s3.putObject(params).promise();
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

        ratios = { stockId: stockId}
        const getMarketCap = () => rawRatios[0][1].trim()
        const getPe = () => rawRatios[3][0].trim()
        ratios['marketCap'] = getMarketCap()
        ratios['pe'] = getPe()
        return ratios
      })
  }

// testHandler("ITC")