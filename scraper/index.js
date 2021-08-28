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
    ratios["OPM"] = getOPMDetails(html);
    ratios["NPM"] = getNPMDetails(html);
    ratios["Debt"]= {
      "Revenue": getRevenueDetails(html),
      "Borrowings": getBorrowingDetails(html),
      "OtherLiabilities": getOtherLiabilitiesDetails(html)
    };
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

function getRevenueDetails(html) {
  const year = [];
  const revenue = [];
  html("thead tr th", "#balance-sheet").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    year.push(stringValues);
  });
  html("tbody tr:nth-child(2) td", "#balance-sheet").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    revenue.push(stringValues);
  });

  const finalRevenue = [];

  totalLength = year.length;
  for (let i = 1; i < totalLength; i++) {
    finalRevenue.push({ [year[i]]: revenue[i][0] });
  }
  // console.log("Revenue : ");
  // console.log(finalRevenue);
  return finalRevenue;
}

function getBorrowingDetails(html) {
  const year = [];
  const borrowing = [];
  html("thead tr th", "#balance-sheet").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    year.push(stringValues);
  });
  html("tbody tr:nth-child(3) td", "#balance-sheet").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    borrowing.push(stringValues);
  });

  const finalBorrowing = [];

  totalLength = year.length;
  for (let i = 1; i < totalLength; i++) {
    finalBorrowing.push({ [year[i]]: borrowing[i][0] });
  }
  // console.log("Borrowing : ");
  // console.log(finalBorrowing);
  return finalBorrowing;
}

function getOtherLiabilitiesDetails(html) {
  const year = [];
  const otherLiability = [];
  html("thead tr th", "#balance-sheet").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    year.push(stringValues);
  });
  html("tbody tr:nth-child(4) td", "#balance-sheet").each((i, el) => {
    const stringValues = html(el)
      .text()
      .split("\n")
      .filter((x) => x.trim() !== "");
    otherLiability.push(stringValues);
  });

  const finalOtherLiability = [];

  totalLength = year.length;
  for (let i = 1; i < totalLength; i++) {
    finalOtherLiability.push({ [year[i]]: otherLiability[i][0] });
  }
  // console.log("Borrowing : ");
  // console.log(finalBorrowing);
  return finalOtherLiability;
}

testHandler("ITC");
