const AWS = require("aws-sdk");
const s3 = new AWS.S3();

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

module.exports = {saveToS3};