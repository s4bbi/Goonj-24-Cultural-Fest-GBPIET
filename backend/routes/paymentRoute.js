const express = require('express');

const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.get('/orderid', paymentController.createOrderId);
router.post('/paymentverify', paymentController.paymentVerification);


module.exports = router;