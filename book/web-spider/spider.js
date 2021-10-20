import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import mkdirp from 'mkdirp';
import { urlToFilename } from './utils.js';

export const spider = (url, cb) => {                   
    const filename = urlToFilename(url);
    fs.access(filename, err => {                               // (1)
        if (err && err.code === 'ENOENT') {   // Error NO ENTity
            console.log(`Downloading ${url} into ${filename}`);
            superagent.get(url).end((err, res) => {            // (2)
                if (err) 
                    cb(err)

                mkdirp(path.dirname(filename), err => {        // (3)
                    if (err)
                        cb(err)

                    fs.writeFile(filename, res.text, err => {   // (4)
                        if (err)
                            cb(err)

                        cb(null, filename, true);
                    })
                })
            })
        }

        cb(null, filename, false); // did not write file
    })
}

// mkdirp('/foo').then(made =>
//     console.log(`made directories, starting with ${made}`))

urlToFilename('http://www.example.com');