const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.post('/shortenUrl', controller.postUrl).get('/getRedirectUrl/:id');

module.exports = router;
