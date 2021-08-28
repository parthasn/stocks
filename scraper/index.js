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
  console.log("Inside saveToS3() ")
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
  console.log("saveToS3() => Successfully saved to S3 !!! ")
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
      ratios["marketCap"] = getMarketCap();
      ratios["pe"] = getPe();
      ratios["OPM"] = getOPMDetails(html);
      ratios["NPM"] = getNPMDetails(html);
      return ratios;
    });
}

function getNPMDetails(html) {
  const year = [];
  const NPM = [];
  html("thead:first-child tr th", "#profit-loss").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    year.push(stringValues);
  });
  html("tbody:nth-child(2) tr:nth-child(10) td", "#profit-loss").each(
    (i, el) => {
      const stringValues = html(el)
        .text()
        .split("\n")
        .filter((x) => x.trim() !== "");
      NPM.push(stringValues);
    }
  );

  const finalNPM = [];

  totalLength = year.length;
  for (let i = 1; i < totalLength; i++) {
    finalNPM.push({ [year[i]]: NPM[i][0] });
  }
  console.log("NPM : ");
  console.log(finalNPM);
  return finalNPM;
}

function getOPMDetails(html) {
  const year = [];
  const OPM = [];
  html("thead:first-child tr th", "#profit-loss").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    year.push(stringValues);
  });
  html("tbody:nth-child(2) tr:nth-child(4) td", "#profit-loss").each(
    (i, el) => {
      const stringValues = html(el)
        .text()
        .split("\n")
        .filter((x) => x.trim() !== "");
      OPM.push(stringValues);
    }
  );

  const finalOPM = [];

  totalLength = year.length;
  for (let i = 1; i < totalLength; i++) {
    finalOPM.push({ [year[i]]: OPM[i][0] });
  }
  console.log("OPM : ");
  console.log(finalOPM);
  return finalOPM;
}

testHandler("ITC")
