const express = require('express');

const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.get('/orderid', paymentController.createOrderId);
router.post('/paymentverify', paymentController.paymentVerification);

console.log(process.env.NODE_ENV)
module.exports = router;