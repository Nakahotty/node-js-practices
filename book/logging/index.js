const express = require('express');
const {pino} = require('pino');
const expressPino = require('express-pino-logger');

const randomID = require('./random-id');

const logger = pino({level: process.env.LOG_LEVEL || 'info'});
const expressLogger = expressPino({logger});

const PORT = process.env.port || 5000;
const app = express();

// app.use(expressLogger);

app.get('/', (req, res) => {
    logger.debug('Calling res.send');
    const ID = randomID.getRandomId();
    res.send(`'<b>Hello World ${ID}!</b>'`);
});

app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}...`);
});