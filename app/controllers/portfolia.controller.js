const portfoliaModel = require('../models/portfoliaModel');
const  logger  = require('../logger/logger');
const { addForm, editForm } = require('../validations/portpoliaValidation')
const categoryModel = require('../models/category.Model')

exports.portfolia = async (req, res) => {
    const result = await portfoliaModel.aggregate([
        { $lookup:
          {
            from: 'Category',
            localField: 'category',
            foreignField: 'projectcategory',
            as: 'data'
          },
        },
      ])
  
     result.map(d=>{
         const id = d.projectcategory;
       
   d.data.forEach(v => {
    const c_id = v._id;
    if(id == c_id){
       d.projectcategory  = v.category
    }
});
});

res.send(result)

    }
    
   

exports.addData = async(req, res) => {
    try {
        const { error } = addForm(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        else {
            const result = await categoryModel.find({category:req.body.projectcategory});
             const mulImages = req.files.map(images =>images.filename)

            const data = {
                projectcategory: result[0]._id,
                projectname: req.body.projectname,
                projecttitle: req.body.projecttitle,
                uploadImage: mulImages,
                projecturl: req.body.projecturl,
                projectdate:req.body.projectdate

            }

            const portfoliaData = await portfoliaModel(data)
            portfoliaData.save()
            res.send('save portfolia')
                
        
    }
    }
    catch (error) {
        logger.error('error', error);
    }
}
exports.editData = async (req, res) => {

    try {

        let { error } = editForm(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
            
            }
            const results = await categoryModel.find({category:req.body.projectcategory});
             const mulImages = req.files.map(images =>images.filename)

        const data = {
            projectcategory: results[0]._id,
                projectname: req.body.projectname,
                projecttitle: req.body.projecttitle,
                projecturl: req.body.projecturl,
                projectdate:req.body.projectdate

        }

        if (req.file) {
            data.uploadImage = mulImages
        }

        const result = await portfoliaModel.findByIdAndUpdate(req.params.id, data)
        res.send('edit portfolia data')
    }
    catch (err) {
        logger.error('Error', err);
    }
}

exports.deleteData = (req, res) => {
    const id = req.params.id;
    testModel.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot Delete user with ${id}.May be is wrong` })
            } else {
                res.send('delete portfolia')
            }
        })
        .catch(err => {
            res.send({
                message: 'Could not delete User with id' + id
            })
        })
}

exports.deleteAll = (req, res) => {
    const id = req.query;

    var countId = Object.keys(id).length;
    for (let i = 0; i < countId; i++) {
        protfoliaModel.findByIdAndDelete(Object.keys(id)[i], function (err) {
            if (err) {
                logger.error("error", err)
            }
        })
    }
     res.send('delete all protfolia')

}
