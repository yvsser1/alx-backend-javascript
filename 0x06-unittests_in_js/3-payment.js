const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = sendPaymentRequestToApi;