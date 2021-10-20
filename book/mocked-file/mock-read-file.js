import fs from 'fs';

const originalReadFile = fs.readFile; // save reference to the original implementation
let mockedResponse = null;

const mockedReadFile = (path, cb) => {
    setImmediate(() => {
        cb(null, mockedResponse);
    })
}

export const mockEnable = (respondWith) => {
    mockedResponse = respondWith;
    fs.readFile = mockedReadFile;  // changing fs module method
}

export const mockDisable = () => {
    fs.readFile = originalReadFile;
}