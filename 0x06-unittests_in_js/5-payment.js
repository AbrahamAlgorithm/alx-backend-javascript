const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const value = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${value}`);
};

module.exports = sendPaymentRequestToApi;
