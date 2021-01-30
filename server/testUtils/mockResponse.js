const sinon = require('sinon');

const mockResponse = () => ({
  status: sinon.spy(),
  send: sinon.spy(),
});

module.exports = mockResponse;
