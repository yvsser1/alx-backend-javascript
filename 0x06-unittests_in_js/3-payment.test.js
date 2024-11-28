const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with correct arguments', () => {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function with specific arguments
    const result = sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Verify the result
    expect(result).to.equal(120);

    // Restore the spy to prevent affecting other tests
    calculateNumberSpy.restore();
  });
});