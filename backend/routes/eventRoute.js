const express = require('express');

const eventController = require('../controllers/eventController');
const paymentController = require('../controllers/paymentController')


const router = express.Router();
const authController = require('../controllers/authController');


router
    .route('/')
    .get(
        authController.validateToken,
        authController.restrictTo('CA', 'PT'),
        eventController.getUserEvents
    )
    .post(
        authController.validateToken,
        authController.restrictTo('CA', 'PT'),
        paymentController.isPaid,
        eventController.registerUser
    )
    .delete(
        authController.validateToken,
        authController.restrictTo('CA', 'PT'),
        eventController.unRegisterUser
    )

module.exports = router;

