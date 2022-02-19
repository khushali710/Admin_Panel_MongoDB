const Joi = require("@hapi/joi");

function validateForm(register) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).empty().required().messages({
            "string.base": `Name should be a type of text`,
            "string.min": `Name should be a 3 Character '`,
            "string.max": `Name should be a 30 Character '`,
            "string.empty": 'Name is not allowed to be empty',
            "any.required": `Name is Required`,
        }),
        email: Joi.string().email().empty().required().label("Email").messages({
            "string.base": `Email should be a type of text`,
            "string.email": `Email format not valid`,
            "string.empty": 'Email is not allowed to be empty',
            "string.required": `Email is Required`,
        }),
        gender: Joi.string().empty().required().messages({
            "string.base": `Gender should be a type of text`,
            "string.empty": 'Gender is not allowed to be empty',
            "string.required": `Gender is Required`,
        }),
        phoneno: Joi.string().pattern(/^[0-9]+$/).length(10).empty().required().label("Phone No").messages({
            "string.base": `Phone Number should be a type of text`,
            "string.pattern.base": `Enter only Numbers`,
            "string.empty": 'Phone Number is not allowed to be empty',
            "string.required": `Phone Number is Required`,

        }),
        password: Joi.string().empty().required().messages({
            "string.base": `Password should be a type of text`,
            "any.empty": 'Password is not allowed to be empty',
            "string.required": `Password is Required`,
            "string.password": `Password format not valid`,
        }),
        confirmpassword: Joi.string().empty().required().valid(Joi.ref('password')).messages({
            "string.base": `Confirm Password should be a type of text`,
            "string.empty": 'Confirm Password is not allowed to be empty',
            "string.required": `Confirm Password is Required`,
            "any.only": "Confirm Password doesn't match password",
        }),
        city: Joi.string().empty().required().messages({
            "string.base": `City should be a type of text`,
            "string.empty": 'City  is not allowed to be empty',
            "string.required": `city is Required`,
        }),
        hobby: Joi.string().empty().required().messages({
            "string.base": `hobby should be a type of text`,
            "string.empty": 'hobby  is not allowed to be empty',
            "string.required": `hobby is Required`,
        })
    })

   
    return schema.validate(register, { abortEarly: false });
}

function logingForm(loging) {
    const schema = Joi.object({
        
        email: Joi.string().email().empty().required().label("email").messages({
            "string.base": `Email should be a type of text`,
            "string.email": `Email format not valid`,
            "string.empty": 'Email is not allowed to be empty',
            "string.required": `Email is Required`,
        }),
        password: Joi.string().empty().required().messages({
            "string.base": `Password should be a type of text`,
            "any.empty": 'Password is not allowed to be empty',
            "string.required": `Password is Required`,
            "string.password": `Password format not valid`,
        })
    })

    
        return schema.validate(loging, { abortEarly: false });
    }
    function forgotpass(forgotpass) {
        const schema = Joi.object({
            email: Joi.string().email().empty().required().label("email").messages({
                "string.base": `Email should be a type of text`,
                "string.email": `Email format not valid`,
                "string.empty": 'Email is not allowed to be empty',
                "string.required": `Email is Required`,
            })
        })
        return schema.validate(forgotpass, { abortEarly: false });
    }
    function newpassword(updatepass) {
        const schema = Joi.object({
            password: Joi.string().empty().required().messages({
                "string.base": `Password should be a type of text`,
                "any.empty": 'Password is not allowed to be empty',
                "string.required": `Password is Required`,
                "string.password": `Password format not valid`,
            }),
            confirmpassword: Joi.string().empty().required().valid(Joi.ref('password')).messages({
                "string.base": `Confirm Password should be a type of text`,
                "string.empty": 'Confirm Password is not allowed to be empty',
                "string.required": `Confirm Password is Required`,
                "any.only": "Confirm Password doesn't match password",
            })
        })
        return schema.validate(updatepass, { abortEarly: false });
    }
    function changepassword(changepassword) {
        const schema = Joi.object({
            
            oldpassword: Joi.string().empty().required().messages({
                "string.base": `Password should be a type of text`,
                "any.empty": 'Password is not allowed to be empty',
                "string.required": `Password is Required`,
                "string.password": `Password format not valid`,
            }),
            password: Joi.string().empty().required().messages({
                "string.base": `Password should be a type of text`,
                "any.empty": 'Password is not allowed to be empty',
                "string.required": `Password is Required`,
                "string.password": `Password format not valid`,
            }),
            confirmpassword: Joi.string().empty().required().valid(Joi.ref('password')).messages({
                "string.base": `Confirm Password should be a type of text`,
                "string.empty": 'Confirm Password is not allowed to be empty',
                "string.required": `Confirm Password is Required`,
                "any.only": "Confirm Password doesn't match password",
            })
        })
        return schema.validate(changepassword, { abortEarly: false });
    }
    function editProfile(editProfile) {
        const schema = Joi.object({
            name: Joi.string().min(3).max(30).empty().required().messages({
                "string.base": `Name should be a type of text`,
                "string.min": `Name should be a 3 Character '`,
                "string.max": `Name should be a 30 Character '`,
                "string.empty": 'Name is not allowed to be empty',
                "any.required": `Name is Required`,
            }),
            email: Joi.string().email().empty().required().label("Email").messages({
                "string.base": `Email should be a type of text`,
                "string.email": `Email format not valid`,
                "string.empty": 'Email is not allowed to be empty',
                "string.required": `Email is Required`,
            }),
            gender: Joi.string().empty().required().messages({
                "string.base": `Gender should be a type of text`,
                "string.empty": 'Gender is not allowed to be empty',
                "string.required": `Gender is Required`,
            }),
            phoneno: Joi.string().pattern(/^[0-9]+$/).length(10).empty().required().label("Phone No").messages({
                "string.base": `Phone Number should be a type of text`,
                "string.pattern.base": `Enter only Numbers`,
                "string.empty": 'Phone Number is not allowed to be empty',
                "string.required": `Phone Number is Required`,
    
            }),
           
            city: Joi.string().empty().required().messages({
                "string.base": `City should be a type of text`,
                "string.empty": 'City  is not allowed to be empty',
                "string.required": `city is Required`,
            }),
            hobby: Joi.string().empty().required().messages({
                "string.base": `hobby should be a type of text`,
                "string.empty": 'hobby  is not allowed to be empty',
                "string.required": `hobby is Required`,
            })
        })
    
       
        return schema.editProfile(editProfile, { abortEarly: false });
    }
    

module.exports = {
    logingForm,        
    validateForm,
    forgotpass,
    newpassword,
    changepassword,
    editProfile
}

