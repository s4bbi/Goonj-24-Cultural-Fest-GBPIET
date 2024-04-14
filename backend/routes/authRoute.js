const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();


router.post('/login', authController.checkUser); // if the user exists token will be given and if user doesnt 
router.post('/signup', authController.signup); // error code CU401 will be sent to the client and it will be read by frontend application and it will redirect to registeration form
router.post('/caidcheck',authController.checkCaId);
router.post('/clgidcheck',authController.checkClgId)
module.exports = router;