
require('./config/paths').init();

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const logger = require('src/utils/logger')
const config = require('src/config');
let configRoutes = require('src/config/routes');

let { extendResponseMethods } = require('src/utils/express');

const app = express();

app.use(helmet());
app.use(extendResponseMethods);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configRoutes(app);

app.listen(config.port, () => {

  let nowStr = new Date()
    .toISOString()
    .substr(0, 19)
    .replace(/T/, ' at ');

  logger.info('*********************************************************');
  logger.info('Pupug Jira API');
  logger.info(`Server is up, listening on port ${config.port}`);
  logger.info(`Started on ${nowStr} UTC`);
  logger.info('*********************************************************');
});

module.exports = app;
