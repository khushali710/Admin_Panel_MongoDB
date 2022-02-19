const Joi = require('@hapi/joi');

function addForm(req) {
    // console.log("register",register);
    const schema = Joi.object({
        projectcategory: Joi.string().min(3).max(30).empty().required().messages({
            "string.base": `projectcategory should be a type of text`,
            "string.min": `projectcategory should be a 3 Character '`,
            "string.max": `projectcategory should be a 30 Character '`,
            "string.empty":'projectcategory is not allowed to be empty',
            "any.required": `projectcategory is Required`,
        }),
        
        projectname: Joi.string().empty().required().messages({
            "string.base": `Designation should be a type of text`,
            "string.empty":'Designation  is not allowed to be empty',
            "string.required": `Designation is Required`,
          }),
          projecttitle: Joi.string().empty().required().messages({
            "string.base": `projecttitle should be a type of text`,
            "string.empty":'projecttitle  is not allowed to be empty',
            "string.required": `projecttitle is Required`,
          }),
          projecturl: Joi.string().empty().required().messages({
            "string.base": `projecturl should be a type of text`,
            "string.empty":'projecturl  is not allowed to be empty',
            "string.required": `projecturl is Required`,
          }),
          projectdate: Joi.string().empty().required().messages({
            "string.base": `projectdate should be a type of text`,
            "string.empty":'projectdate  is not allowed to be empty',
            "string.required": `projectdate is Required`,
          })
    })

    return schema.validate(req, { abortEarly: false });
}

function editForm(req) {
    // console.log("register",req);
    const schema = Joi.object({
        projectcategory: Joi.string().min(3).max(30).empty().required().messages({
            "string.base": `projectcategory should be a type of text`,
            "string.min": `projectcategory should be a 3 Character '`,
            "string.max": `projectcategory should be a 30 Character '`,
            "string.empty":'projectcategory is not allowed to be empty',
            "any.required": `projectcategory is Required`,
        }),
        
        projectname: Joi.string().empty().required().messages({
            "string.base": `Designation should be a type of text`,
            "string.empty":'Designation  is not allowed to be empty',
            "string.required": `Designation is Required`,
          }),
          projecttitle: Joi.string().empty().required().messages({
            "string.base": `projecttitle should be a type of text`,
            "string.empty":'projecttitle  is not allowed to be empty',
            "string.required": `projecttitle is Required`,
          }),
          projecturl: Joi.string().empty().required().messages({
            "string.base": `projecturl should be a type of text`,
            "string.empty":'projecturl  is not allowed to be empty',
            "string.required": `projecturl is Required`,
          }),
          projectdate: Joi.string().empty().required().messages({
            "string.base": `projectdate should be a type of text`,
            "string.empty":'projectdate  is not allowed to be empty',
            "string.required": `projectdate is Required`,
          })
    })

    return schema.validate(req, { abortEarly: false });
}

module.exports ={
    addForm,
    editForm
}