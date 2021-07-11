const cheerio = require('cheerio')
const axios = require('axios');

const print = console.log

function getItcPrice() {
    return (axios.get('https://www.screener.in/company/ITC/consolidated/'))
    .then((response) => {
        const html = cheerio.load(response.data);
        const topRatios = html('#top-ratios');
        // print(topRatios.children())
        // topRatios.children().forEach((x) => print(x.html()))

        html('li', '#top-ratios').each((i, el) => {
          const leText = html(el).text().split('\n')
          print(leText.filter(x => x.trim() !== ''));
        })
        return topRatios
      })
  }


// async function getItcPrice() {
//   const response = await axios.get('https://www.screener.in/company/ITC/consolidated/');
//   const html = cheerio.load(response.data);
//   const topRatios = html('#top-ratios');
//   return topRatios
// }

async function main() {
  await getItcPrice()
}
// getItcPrice().then((b) => print(b))

main()