const express = require('express');
const router = express.Router();
const { 
    signup, 
    sendOtp, 
    login, 
    verifyOtp, 
    resendOtp, 
    forgotPassword, 
    resetPassword, 
    deleteUser
} = require('../controllers/user.controllers');


router.post('/signup', signup);
router.post('/login', login); 
router.post('/send-otp/:id', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp/:id', resendOtp);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.delete('/delete-user/:id', deleteUser);


module.exports = router;