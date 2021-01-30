const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const app = require('../app');
const Urls = require('../models');

describe('Index Route', () => {
  it('shortenUrl', async () => {
    const url = 'fakeUrl.com';

    const response = await chai.request(app).post('/shortenUrl').send({
      url,
    });

    expect(response.statusCode).to.equal(200);
    expect(response.body.result.url).to.equal('fakeUrl.com');

    await Urls.destroy({ where: { url } });
  });

  it('getRedirectUrl', async () => {
    const url = 'fakeUrl.com';

    const createdUrl = await Urls.create({
      url,
    });

    const response = await chai
      .request(app)
      .get(`/getRedirectUrl/${createdUrl.id}`);

    expect(response.statusCode).to.equal(200);
    expect(response.body.result.url).to.equal('fakeUrl.com');

    await Urls.destroy({ where: { url } });
  });
});
