const Urls = require('../models');

exports.postUrl = async (req, res, next) => {
  const { url } = req.body;

  try {
    const result = await Urls.create({
      url,
    });

    return res.status(200).send({
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      errorMessage: 'There was a problem',
    });
  }
};

exports.getRedirectUrl = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Urls.findOne({ where: { id } });

    return res.status(200).send({
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      errorMessage: 'There was a problem',
    });
  }
};
