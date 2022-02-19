const express = require('express');
const router = express.Router();
const multer = require('multer');
const { auth } =  require('../helpers/auth');
const testController = require('../controllers/testimonia.controller');
const upload = require('../sevices/multer');

router.get('/viewtestimonial',auth, testController.testimonial);


router.post('/addtestimonial',auth,upload.single('uploadImage'),testController.addData);
router.post('/edittestimonial/:id',auth,upload.single('uploadImage'),testController.editData);
router.get('/testimonialdelete/:id',auth,testController.deleteData);
router.get('/api/testimonial/delete',auth,testController.deleteAll);

module.exports = router;