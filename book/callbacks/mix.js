import glob from 'glob';

// returns an EventEmitter                       accepts a callback
// const eventEmitter = glob(pattern, [options], callback);

glob('file*.txt', (err, data) => {
    if (err)
        return console.log(err);

    console.log(`All files found: ${JSON.stringify(data)}`);
})
.on('match', match => console.log(`Match found: ${match}`));