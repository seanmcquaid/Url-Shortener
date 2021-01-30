const sinon = require('sinon');

const mockRequest = (body, params) => ({
  body,
  params,
});

module.exports = mockRequest;
