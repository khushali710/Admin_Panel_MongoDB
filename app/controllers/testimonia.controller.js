const testModel = require('../models/testimoniaModel');
const logger  = require('../logger/logger');
const { addForm, editForm } = require('../validations/testimoniaValidation')

exports.testimonial = async (req, res) => {
    const result = await testModel.find();

    res.send(result)
}
exports.addData = (req, res) => {
            try {
                const { error } = addForm(req.body);
                if (error) {
                    if (error.details[0].message) {
                        
                        res.send('addTest')
                    }
                }
           
        else {
            const data = {
                name: req.body.name,
                designation: req.body.designation,
                description: req.body.description,
                uploadImage: req.file.filename
            }

            const testData = new testModel(data)
            testData.save()
                
                    res.send('save TestData')
                
        }
    }
    catch (err) {
        logger.error('Error', err);
    }
}
exports.editData = async (req, res) => {

    try {

        let { error } = editForm(req.body);
        if (error) {
            if (error.details[0].message) {
             res.send('editTest')
            }
            
            }
        const data = {
            name: req.body.name,
            designation: req.body.designation,
            description: req.body.description,
        }

        if (req.file) {
            data.uploadImage = req.file.filename
        }

        const result = await testModel.findByIdAndUpdate(req.params.id, data)
        res.send('edit test data')
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
                res.send('delete testimonial')
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

