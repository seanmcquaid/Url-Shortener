const expect = require('chai').expect;
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();
const { postUrl, getRedirectUrl } = require('../../controllers');
const mockRequest = require('../../testUtils/mockRequest');
const mockResponse = require('../../testUtils/mockResponse');
const mockNext = require('../../testUtils/mockNext');

describe('Index Controller', () => {
  it('postUrl', () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNext();
  });

  it('getRedirectUrl', () => {});
});
