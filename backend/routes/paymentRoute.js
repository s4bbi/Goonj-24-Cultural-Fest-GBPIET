const express = require('express');

const paymentController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/orderid', 
    authController.validateToken,
    paymentController.createOrderId
);


router.post('/paymentverify', paymentController.paymentVerification);


module.exports = router;