const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(__dirname + './data.txt');
    stream.pipe(res);
});

server.listen(3000);


const buf = Buffer.from('Hey!')
let copy = Buffer.alloc(4)
copy.set(buf)

// example of catching exceptions
process.on('uncaughtException', (err) => {
    console.log(`There was an uncaught error ${err}`)
    process.exit(1)
})

// async/await
// async function f () {
//     try {
//         await other();
//     } catch (error) {
//         console.log(error.message);
//     }
// }

const obj = {
    name: 'joe',
    age: 35,
    person1: {
        name: 'Tony',
        age: 50,
        person2: {
            name: 'Albert',
            age: 21,
            person3: {
                name: 'Peter',
                age: 23,
            },
        },
    },
}
console.log(obj);
console.log(JSON.stringify(obj,null,2));
