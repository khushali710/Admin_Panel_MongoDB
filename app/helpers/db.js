const mongoose = require('mongoose');
const  logger  = require('../logger/logger');


mongoose.connect('mongodb://localhost:27017/khushali')
    .then(() => logger.info('Connected to MongoDB....'))
    .catch((err => logger.error('could not connect to MongoDB...')))