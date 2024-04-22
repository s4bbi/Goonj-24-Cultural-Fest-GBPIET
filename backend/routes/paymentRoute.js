const express = require('express');

const paymentController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/orderid/:paymentId', 
    authController.validateToken,
    paymentController.createOrderId
);

router.post('/paymentverify/:caid?', 
    authController.validateToken,
    paymentController.paymentVerification
);


module.exports = router;