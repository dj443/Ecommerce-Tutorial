const express = require('express');
const {signupValidator, signinValidator, validatorResult} = require('../middleware/validator');
const {signupController, signinController} = require('../controllers/auth');

const router = express.Router();

router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/signin', function(req, res){
    signinValidator, 
    validatorResult, 
    signinController
});

module.exports = router;