const bcrypt = require('bcrypt')
const {validateForm, logingForm,forgotpass,newpassword,changepassword,editProfile} = require('../validations/userValidation');
const userModel =require('../models/userModel');
const logger = require('../logger/logger');
const { sendOTP }  = require('../sevices/mail');
const { response } = require('express');
const auth = require('../helpers/auth');
const res = require('express/lib/response');
var otp = Math.floor(100000 + Math.random() * 900000);


exports.register = async(req,res)=>{
    try{
        const { error } = validateForm(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
         else{
            let user = await userModel.findOne({ email: req.body.email })
            if (user) {
               res.send ('already register')
            }
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
             
            const data = {
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                phoneno: req.body.phoneno,
                uploadImage: req.file.filename,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
                city: req.body.city,
                hobby: req.body.hobby
            }
            const userData = new userModel(data)
            userData.save()
                .then(data => {
                    res.send("data insert")
                })
            }

    }
    catch(err){
        logger.error(err);
    }
}
exports.loging = async(req,res)=>{
    console.log(req.body);
    try{
        const { error } = logingForm(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
         else{
            let user = await userModel.findOne({ email: req.body.email })
            if (user) {
              
               const comparePassword = await bcrypt.compare(req.body.password, user.password);
               if (comparePassword) {
               res.send('Login Successfully...');
               }
               else{
                   res.send('password is not match')
               }
            }
            else{
                res.send ('User not register')
                }
         }  
 }
    catch(err){
        logger.error(err);
    }
}
     exports.forgotpass = async(req,res)=> {
         try{
             const {error} = forgotpass(req.body);
             if(error) {
                 return res.status(400).send(error.details[0].message);
             }
             else{
                 let user = await userModel.findOne({ email:req.body.email})
                 if(user){
                    sendOTP(req.body.email,otp);
                    
                     res.send('otp send')
                 }
                 else{
                     res.send('user is not found')
                 }
             }
         }catch(err){
             logger.error('Error',err);
         }
     }
     exports.verifyOtp = (req, res) => {
        try {
            if (otp == req.body.otp) {
                res.send('verify otp')
            }
            else {
                
                 res.send('plz enter valid otp')
            }
        } catch (err) {
            logger.error('Error', err);
        }
    }
    exports.updatepass = async(req,res)=>{
        try{
            const {error} = newpassword(req.body);
            if(error) {
                return res.status(400).send(error.details[0].message);
            }
            else {
                const salt = 10;
                const bcryptPassword = await bcrypt.hash(req.body.password, salt);
    
                const passwordUpdate = { password: bcryptPassword }
                userModel.updateMany({ email: req.body.email }, passwordUpdate, (err, response) => {
                    if (response) {
                        res.send('updatepass')
                    } else {
                        logger.error(err);
                    }
                })
            }
        } catch(err){
            logger.error('Error',err);
        }
    }
    exports.changepassword = async(req, res) =>{
        console.log(req.body);
        try{
            const { error } = changepassword(req.body);
            if(error){
                console.log(error);
                
               return res.status(400).send(error.details[0].message);
            }
                {
                    
                 const email = req.user.email;
                console.log(email);

                let user = await userModel.findOne({ email:email })
                if (user) {
                    const passwordValid = await bcrypt.compare(req.body.oldpassword, user.password);
                    
                if (passwordValid) {
                    
                    const salt = 10;
                    const bcryptPassword = await bcrypt.hash(req.body.password, salt);
                    const passwordUpdate = { password: bcryptPassword };
                    
                    userModel.updateMany({ email }, passwordUpdate, async (err, response) => {
                        if (response) {
                            
                            res.send('change password')
                        } else {
                            logger.error(err);
                        }
                    })
                } else {
                     res.send('incorrect old password')
                        
                    
                }
            }
        }
         

    }
    catch (err) {
        logger.error(err);
    }
}
exports.viewProfile = async (req, res) => {
    const email = req.user.email;

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            res.send(user)
        
        }

    } catch (err) {
        logger.error(err);
    }
}
exports.editProfile = async (req, res) => {

        const data = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phoneno: req.body.phoneno,
        password: req.body.password,
        city: req.body.city
    }

    if (req.file) {
        data.uploadImage = req.file.filename
    }
   const result= await userModel.findOneAndUpdate({ email: req.user.email }, data)
            if (result) {
                res.send('data upadated')
                
            } else {
                res.send('not upadated')
            }
        
    
    }
   
exports.logout = async(req, res) => {
    try {
        res.clearCookie("jwt");
        res.send('logout');
    }
  catch (err) {
        logger.error(err);
    }
}
    
            