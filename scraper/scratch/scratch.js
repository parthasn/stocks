const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");

const print = console.log;

var testHandler = (exports.handler = async function (event, context) {
  // print("EVENT: \n" + JSON.stringify(event, null, 2))
  const ratios = await getStockDetails(event);
  // getBorrowingDetails(event)
  console.log(ratios)
  // return context.logStreamName
});

function getStockDetails(stockId) {
  // return (axios.get(`https://www.screener.in/company/${stockId}/consolidated/`))
  return fs.readFile("scratch/itc.html", (err, data) => {
    const html = cheerio.load(data);

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
    // print(rawRatios)
    ratios = {};
    const getMarketCap = () => filter(rawRatios[0][1].trim());
    const getPe = () => filter(rawRatios[3][0].trim());
    const getDividend = () => filter(rawRatios[5][0].trim());
    const getFaceValue = () => filter(rawRatios[8][1].trim());
    ratios["MarketCap"] = { unit : "Cr", value : getMarketCap() };
    ratios["PE"] = { unit : "", value : getPe() };
    ratios["Dividend"] = { unit : "%", value : getDividend() }
    ratios["FaceValue"] = { unit : "", value : getFaceValue() }
    ratios["OPM"] = getOPM(html);
    ratios["NPM"] = getNPM(html);
    ratios["Debt"] = {
      "Revenue": getRevenue(html),
      "Borrowings": getBorrowing(html),
      "OtherLiabilities": getOtherLiabilities(html),
    };
    print("Final data : " + JSON.stringify(ratios));
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
  let isTTMPresent=false
  let TTMValue=''
  for (let i = 1; i < totalLength; i++) {
    let value = filter(data[i][0]); 
    if(year[i][0] === 'TTM'){
      isTTMPresent=true
      TTMValue=value
      continue
    }
    let obj = { "year" : extractYear(year[i][0]), "value" : parseInt(value)}
    finalData.push(obj);
  }
  let result = {}
  if (isTTMPresent)
    result = {data: finalData, TTM: TTMValue}
  else
    result = {data: finalData}
  //console.log(result);
  return result;
}

function extractYear(input){
  const yearOnlyPattern = /[0-9]+$/;
  return parseInt(String(input).match(yearOnlyPattern))
}

function filter(value){
  value = value.replace('%', '')
  value = value.replace(',', '')
  return parseInt(value)
}

function getOPM(html) {
  let OPMDetails = getDetails(
    html,
    "thead:first-child tr th",
    "tbody:nth-child(2) tr:nth-child(4) td",
    "#profit-loss"
  );
  OPMDetails = {...OPMDetails, unit : "%"}
  return OPMDetails;
}

function getNPM(html) {
  let NPMDetails = getDetails(
    html,
    "thead:first-child tr th",
    "tbody:nth-child(2) tr:nth-child(10) td",
    "#profit-loss"
  );
  NPMDetails = {...NPMDetails, unit : "Cr"}
  return NPMDetails
}

function getRevenue(html) {
  let revenue = getDetails(
    html,
    "thead tr th",
    "tbody tr:nth-child(2) td",
    "#balance-sheet",
    "Revenue"
  );
  revenue = {...revenue, unit : "Cr"}
  return revenue
}

function getBorrowing(html) {
  let borrowing = getDetails(
    html,
    "thead tr th",
    "tbody tr:nth-child(3) td",
    "#balance-sheet"
  );
  borrowing = {...borrowing, unit : "Cr"}
  return borrowing
}

function getOtherLiabilities(html) {
  let otherLiability = getDetails(
    html,
    "thead tr th",
    "tbody tr:nth-child(4) td",
    "#balance-sheet"
  );
  otherLiability = {...otherLiability, unit : "Cr"}
  return otherLiability
}

testHandler("ITC");
