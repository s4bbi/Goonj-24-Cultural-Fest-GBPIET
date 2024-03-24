const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');
const paymentController = require('../controllers/paymentController');
const eventController = require('../controllers/eventController');


router
    .route('/')
    .get(
        authController.validateToken,
        eventController.getUserEvents
    )
    .post(
        authController.validateToken,
        paymentController.isPaid,
        eventController.registerUser
    )

module.exports = router;
