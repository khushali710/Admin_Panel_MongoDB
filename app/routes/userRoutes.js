const express = require('express');
const router = express.Router();
const multer = require('multer')
const userController = require('../controllers/user.controller')
const { auth, generateAuthToken } = require('../helpers/auth');
const upload = require('../sevices/multer')


router.post('/register', upload.single('uploadImage'), userController.register);
router.post('/loging',generateAuthToken,userController.loging);
router.post('/forgotpass',userController.forgotpass);
router.post('/verifyOtp',userController.verifyOtp);
router.post('/updatepass',userController.updatepass);
router.post('/changepassword',auth,userController.changepassword);
router.post('/viewProfile',auth,userController.viewProfile)
router.post('/editProfile',auth,upload.single('uploadImage'),userController.editProfile)
router.get('/logout',auth,userController.logout);

module.exports = router;