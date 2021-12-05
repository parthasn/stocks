const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const util = require("./parseDetails")

async function saveToS3(data) {
    util.print("Inside saveToS3() ");
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
    util.print("saveToS3() => Successfully saved to S3 !!! ");
}

module.exports = {saveToS3};