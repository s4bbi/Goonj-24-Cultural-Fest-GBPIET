const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');


router.get('/', authController.validateToken, (req, res)=>{
    res.send('validation complete... time to implement eventSaving routes');
} )

module.exports = router;

