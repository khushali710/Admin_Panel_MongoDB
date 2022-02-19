const categoryModel = require('../models/category.Model');
const { logger } = require('../logger/logger');
const { addForm, editForm } = require('../validations/categoryValidation')


exports.category = async (req, res) => {

    const result = await categoryModel.find();
    res.send(result)


}
exports.addData = (req, res) => {
    try {
        const { error } = addForm(req.body);
        if (error) {
            if (error.details[0].message) {
                
                res.send('addCategory')
            }
        }
        else {
            const data = {
                category: req.body.category,
            }

            const categoryData = new categoryModel(data)
            categoryData.save()
                .then(data => {
                    res.send(' save category')
                })
        }
    }
    catch (err) {
        logger.error('Error', err);
    }
}





exports.editData = async (req, res) => {

    try {
        const { error } = editForm(req.body);
        if (error) {
            if (error.details[0].message) {
                res.send('editCategory')
            }

        } else {

            const data = {
                category: req.body.category
            }
            const result = await categoryModel.findByIdAndUpdate(req.params.id, data)
            res.send('category')

        }

    } catch (err) {
        logger.error(err);

    }

}

exports.deleteData = (req, res) => {
    const id = req.params.id;
    categoryModel.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot Delete user with ${id}.May be is wrong` })
            } else {
                res.send('category')
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
        testModel.findByIdAndDelete(Object.keys(id)[i], function (err) {
            if (err) {
                logger.error("error", err)
            }
        })
    }
    res.send('delte all')
}



    
