const debug = require('debug');

const log = debug('mylib:randomid');

log('Library loaded');

const getRandomId = () => {
    console.log('Computing random ID');
    const id = Math.random()
    .toString(36)
    .substr(2);
    log(`Random ID is: ${id}`);

    return id;
}

module.exports = {getRandomId};