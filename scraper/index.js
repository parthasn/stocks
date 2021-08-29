const cheerio = require("cheerio");
const axios = require("axios");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const print = console.log;

var testHandler = (exports.handler = async function (event, context) {
  const ratios = await getStockDetails(event);
  await saveToS3(ratios);
  // return context.logStreamName
});

async function saveToS3(data) {
  console.log("Inside saveToS3() ");
  const s3Bucket = "stock-ui-bucket";
  const objectName = "data/" + data.stockId;
  const objectType = "application/json";

  const params = {
    Bucket: s3Bucket,
    Key: objectName,
    Body: JSON.stringify(data),
    ContentType: objectType,
  };

  const result = await s3.putObject(params).promise();
  console.log("saveToS3() => Successfully saved to S3 !!! ");
}

function getStockDetails(stockId) {
  return axios
    .get(`https://www.screener.in/company/${stockId}/consolidated/`)
    .then((response) => {
      const html = cheerio.load(response.data);

      const rawRatios = [];
      html("li", "#top-ratios").each((i, el) => {
        const stringValues = html(el)
          .text()
          .split("\n")
          .filter((x) => x.trim() !== "");
        const key = stringValues.slice(0, 1).join("").trim();
        const value = stringValues.slice(1, stringValues.length);
        rawRatios.push(value);
      });

      ratios = { stockId: stockId };
      const getMarketCap = () => rawRatios[0][1].trim();
      const getPe = () => rawRatios[3][0].trim();
      const getDividend = () => rawRatios[5][0].trim() + "%";
      const getFaceValue = () => rawRatios[8][1].trim();
      ratios["MarketCap"] = getMarketCap();
    ratios["PE"] = getPe();
    ratios["Diviend"] = getDividend();
    ratios["FaceValue"] = getFaceValue();
    ratios["OPM"] = getOPM(html);
    ratios["NPM"] = getNPM(html);
    ratios["Debt"]= {
      "Revenue": getRevenue(html),
      "Borrowings": getBorrowing(html),
      "OtherLiabilities": getOtherLiabilities(html)
    };
      return ratios;
    });
}

function getDetails(html, yearSelector, dataSelector, sectionSelector) {
  const year = [];
  const data = [];
  html(yearSelector, sectionSelector).each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    year.push(stringValues);
  });
  html(dataSelector, sectionSelector).each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    data.push(stringValues);
  });

  const finalData = [];

  totalLength = year.length;
  for (let i = 1; i < totalLength; i++) {
    let obj = { "year" : year[i][0], "value" : data[i][0]}
    finalData.push(obj);
  }
  // console.log(finalData);
  return finalData;
}

function getOPM(html) {
  return getDetails(
    html,
    "thead:first-child tr th",
    "tbody:nth-child(2) tr:nth-child(4) td",
    "#profit-loss"
  );
}

function getNPM(html) {
  return getDetails(
    html,
    "thead:first-child tr th",
    "tbody:nth-child(2) tr:nth-child(10) td",
    "#profit-loss"
  );
}

function getRevenue(html) {
  return getDetails(
    html,
    "thead tr th",
    "tbody tr:nth-child(2) td",
    "#balance-sheet"
  );
}

function getBorrowing(html) {
  return getDetails(
    html,
    "thead tr th",
    "tbody tr:nth-child(3) td",
    "#balance-sheet"
  );
}

function getOtherLiabilities(html) {
  return getDetails(
    html,
    "thead tr th",
    "tbody tr:nth-child(4) td",
    "#balance-sheet"
  );
}

// testHandler("ITC");
