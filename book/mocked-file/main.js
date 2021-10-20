import fs from 'fs';
import { mockEnable, mockDisable } from './mock-read-file.js';

mockEnable(Buffer.from('Hello World'));  // why not Hello World?

fs.readFile('fake-path', (err, data) => {
    if (err) {
        console.log(err);
        process.exit(1)
    }

    console.log(data.toString());
});

mockDisable();