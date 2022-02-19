const nodemailer = require('nodemailer');
const logger = require('../logger/logger');

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",   
    service: 'Gmail',
    secure: false,
    port: 25,
    auth:{
        user:'jaini.shivinfotech@gmail.com',
        pass:' jaini.shivinfotech_16@'
    }
})

const sendOTP = (email,otp)=>{
const mailSend = {
    from :process.env.SECRET_EMAIL,
    to:email,
    subject:'OTP for New Password',
    html:"OTP for New Password" + "<b>" + "  " + otp +"</b>"
}

 transport.sendMail(mailSend,function(error , info){
    if(error){
        logger.error(error);

    }
    else{
        logger.info('Email sent'); 
    }
});


}

module.exports={sendOTP};