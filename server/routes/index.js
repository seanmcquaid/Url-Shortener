const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.post('/shortenUrl', controller.postUrl);
router.get('/getRedirectUrl/:id', controller.getRedirectUrl);

module.exports = router;
