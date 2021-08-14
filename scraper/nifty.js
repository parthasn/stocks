const axios = require('axios');
const resources = require('./constants/resources')


function getCompanyNames() {
    return axios.get(resources.nifty50URL)
    .then(function (response) {
        companies = response.data.data;
        companyNames = companies.map( company => company.symbol)
        return companyNames
    });
  }

// getCompanyNames().then(x => console.log(x))
