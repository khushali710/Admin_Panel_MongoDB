const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { auth } = require('../helpers/auth');




router.post('/addcategory',auth,categoryController.addData);
router.post('/updatecategory/:id',auth,categoryController.editData);
router.get('/deletecategory/:id',auth,categoryController.deleteData);
router.get('/deleteallcategory',auth,categoryController.deleteAll);
router.get('/viewcategory',auth,categoryController.category);

module.exports = router;