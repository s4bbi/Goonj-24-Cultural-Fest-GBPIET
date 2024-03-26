const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');


router
    .route('/')
    .get(
        authController.validateToken,
        authController.restrictTo,
        eventController.getUserEvents
    )
    .post(
        authController.validateToken,
        authController.restrictTo,
        paymentController.isPaid,
        eventController.registerUser
    )
    .delete(
        authController.validateToken,
        authController.restrictTo,
        eventController.unRegisterUser
    )

module.exports = router;

