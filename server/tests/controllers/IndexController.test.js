const expect = require('chai').expect;
const { postUrl, getRedirectUrl } = require('../../controllers');
const mockRequest = require('../../testUtils/mockRequest');
const mockResponse = require('../../testUtils/mockResponse');
const mockNext = require('../../testUtils/mockNext');
const mock = require('mock-require');
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

describe('Index Controller', () => {
  it('postUrl', async () => {
    const req = mockRequest({ url: 'fakeUrl.com' });
    const res = mockResponse();
    const next = mockNext();

    await postUrl(req, res, next);
  });

  it('getRedirectUrl', () => {});
});
