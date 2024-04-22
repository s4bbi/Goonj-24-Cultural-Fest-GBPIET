const express = require('express');

const authController = require('../controllers/authController');
const uesrController = require('../controllers/userController');

const router = express.Router();

router.get('/', 
    authController.validateToken,
    uesrController.getUserData
);

router.patch('/updaterole',
    authController.validateToken,
    uesrController.updateRole
)


module.exports = router;