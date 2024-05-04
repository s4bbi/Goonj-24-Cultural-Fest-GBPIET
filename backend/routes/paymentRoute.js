const express = require('express');

const paymentController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/orderid/:paymentid', 
    authController.validateToken,
    paymentController.createOrderId
);

router.post('/paymentverify/:caid?', 
    authController.validateToken,
    paymentController.paymentVerification
);

router.post('/webhook',
    paymentController.webhook
)


module.exports = router;