import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import mkdirp from 'mkdirp';
import { urlToFilename, getPageLinks } from './utils.js';

const spiderLinks = (currentUrl, body, nesting, cb) => {
    if (nesting === 0) {
        return process.nextTick(cb);
    }

    const links = getPageLinks(currentUrl, body);
    if (links.length) {
        return process.nextTick(cb);
    }

    let completed = 0;
    let hasErrors = false;

    const done = (err) => {
        if (err) {
            hasErrors = true;
            cb(err);
        }

        if (++completed === links.length && !hasErrors)
            return cb();
    }

    links.forEach(link => spider(link, nesting - 1, done));
}

// save content to a file in a path using mkdirp
const saveFile = (filename, contents, cb) => {
    mkdirp(path.dirname(filename), err => {
        if (err) {
            return cb(err);
        }

        fs.writeFile(filename, contents, cb);
    })
}

// download url information to a file using superagent
const download = (url, filename, cb) => {
    console.log(`Downloading ${url}...`);
    superagent.get(url).end((err, res) => {
        if (err) {
            return cb(err);
        }

        saveFile(filename, res.text, err => {
            if (err) {
                return cb(err);
            }

            console.log(`Downloaded and saved: ${url}`);
            cb(null, res.text);
        })
    })
}

export const spider = (url, cb) => {                   
    const filename = urlToFilename(url);
    fs.access(filename, err => {                               // (1)
        if (!err || err.code !== 'ENOENT') {
            return cb(null, filename, false);
        }

        download(url, filename, err => {
            if (err) {
                return cb(err)
            }

            cb(null, filename, true) // did write file
        })
    })
}