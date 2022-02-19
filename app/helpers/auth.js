const jwt = require('jsonwebtoken');
const config = require('config');
const logger = require('../logger/logger');

const generateAuthToken = (req, res, next) => {

    const token = jwt.sign({ email: req.body.email }, process.env.jwtPrivateKey);
    console.log(token);
    res.cookie("jwt",token)
    next();
}


const auth = (req, res, next) => {
console.log(req.body);
    try {
        const token = req.cookies.jwt;
        if (token == undefined) {
            return res.send('Invalid Auth');
        }
        const decode = jwt.verify(token, process.env.jwtPrivateKey);
        console.log(decode);
        req.user = decode;
        next();
    } catch (err) {
        logger.error(err);
    }
}
module.exports = {
    generateAuthToken,
    auth
};