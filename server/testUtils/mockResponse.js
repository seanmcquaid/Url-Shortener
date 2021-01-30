const sinon = require('sinon');

function mockResponse() {
  return {
    status: sinon.stub().returnsThis(),
    send: sinon.stub().returnsThis(),
  };
}

module.exports = mockResponse;
