const express = require('express');

const authController = require('../controllers/authController');
const uesrController = require('../controllers/userController');

const router = express.Router();

router.get('/', 
    authController.validateToken,
    uesrController.getUserData
);


module.exports = router;