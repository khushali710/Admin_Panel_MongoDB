const Joi = require('@hapi/joi');

function addForm(req) {
    // console.log("register",register);
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).empty().required().messages({
            "string.base": `Name should be a type of text`,
            "string.min": `Name should be a 3 Character '`,
            "string.max": `Name should be a 30 Character '`,
            "string.empty":'Name is not allowed to be empty',
            "any.required": `Name is Required`,
        }),
        
        designation: Joi.string().empty().required().messages({
            "string.base": `Designation should be a type of text`,
            "string.empty":'Designation  is not allowed to be empty',
            "string.required": `Designation is Required`,
          }),
        description: Joi.string().empty().required().messages({
            "string.base": `Description should be a type of text`,
            "string.empty":'Description  is not allowed to be empty',
            "string.required": `Description is Required`,
          })
    })

    return schema.validate(req, { abortEarly: false });
}

function editForm(req) {
    // console.log("register",req);
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).empty().required().messages({
            "string.base": `Name should be a type of text`,
            "string.min": `Name should be a 3 Character '`,
            "string.max": `Name should be a 30 Character '`,
            "string.empty":'Name is not allowed to be empty',
            "any.required": `Name is Required`,
        }),
        
        designation: Joi.string().empty().required().messages({
            "string.base": `Designation should be a type of text`,
            "string.empty":'Designation  is not allowed to be empty',
            "string.required": `Designation is Required`,
          }),
        description: Joi.string().empty().required().messages({
            "string.base": `Description should be a type of text`,
            "string.empty":'Description  is not allowed to be empty',
            "string.required": `Description is Required`,
          })
    })

    return schema.validate(req, { abortEarly: false });
}

module.exports ={
    addForm,
    editForm
}