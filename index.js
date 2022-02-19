const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const database = require('./app/helpers/db');
const routes = require('./app/routes/userRoutes')
const routes1 = require('./app/routes/categoryRoutes')
const routes2 = require('./app/routes/testimoniaRoutes')
const routes3 = require('./app/routes/portfoliaRoutes')

const cookieParser = require("cookie-parser");
const  logger  = require('./app/logger/logger');
const dotenv = require('dotenv');
dotenv.config();


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use('/',routes)
app.use('/',routes1)
app.use('/',routes2)
app.use('/',routes3)

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));