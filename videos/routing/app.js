const express = require('express');
const app = express();
const port = process.env.port || 3000;
const things = require('./routes/things');

// ENDPOINTS!
app.use('/things', things); // to handle endpoints that start
                            // with /things

app.get('/', (req, res) => {
    res.send('Home');
})


app.listen(port, err => {
    if (err) {
        return console.log('ERROR', err);
    }

    console.log(`Listening on port ${port}...`);
})


/** REGEX EXPRESSIONS
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 * ^ - starts with
 */