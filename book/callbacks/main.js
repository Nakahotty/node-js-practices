import { readFile } from 'fs'      // - CPS (continuation passing style) f(a,b, cb)

// PAGE 75
const readJSON = (filename, callback) => {
    readFile(filename, 'utf-8', (err, data) => {
        let parsed;
        if (err) {
            // propagate the error and exit the current f
            return callback(err);
        }

        try {
            parsed = JSON.parse(data);
        } catch (err) {
            return callback(err);
        }

        callback(null, parsed);
    })
}

const readJSONThrows = (filename, callback) => {
    readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        } 

        callback(null, JSON.parse(data)); // we need a try-catch statement for validation
    })
}

readJSONThrows('blabla.json', (err) => console.log(err)); // it will throw an error



// PAGE 70-75
// const cache = new Map()

// // asynchronous
// const consistentReadAsync = (filename, callback) => {
//     if (cache.has(filename)) {
//         process.nextTick(() => {
//             // defers the execution of a function after the currently running operation completes
//             callback(cache.get(filename))
//         })
//     }

//     readFile(filename, 'utf-8', (err, data) => {
//         cache.set(filename, data)
//         callback(data)
//     })
// }

// const file = readFile('foo.txt', 'utf-8', (err, data) => {
//     if (err) {
//         handleError(err)
//     } else {
//         processData(data)
//     }
// })

