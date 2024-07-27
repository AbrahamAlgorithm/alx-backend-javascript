const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('send payment to API', () => {
  it('send payment to api uses cal from utils', () => {
    const spy = sinon.spy(console);
    const std = sinon.stub(Utils, 'calculateNumber');
    std.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(std.calledWith('SUM', 100, 20)).to.be.true;
    expect(std.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    spy.log.restore();
    std.restore();
  });
});
