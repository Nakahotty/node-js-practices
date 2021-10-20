// import * as loggerModule from './logger.js';
import MyLogger from './logger.js';

// console.log(loggerModule);
const logger = new MyLogger('DEFAULT');
logger.log('Hello World');