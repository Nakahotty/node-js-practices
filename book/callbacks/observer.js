import { FindRegex } from './findregex.js'

const findRegexInstance = new FindRegex(/hello \w+/)
findRegexInstance
    .addFile('fileA.txt')
    .addFile('fileB.json')
    .find()
    .on('found', (file, match) =>
        console.log(`Matched "${match}" in file
    ${file}`)
    )
    .on('error', (err) => console.error(`Error emitted ${err.message}`))

// findRegexInstance.removeListener('an_event', ...);

const helloCallback = (callback) => {
    setTimeout(() => {
        callback(null, 'Hello World!')
    }, 200)
}

helloCallback((err, message) => console.log(message))

/* METHODS
•  on(event, listener): This method allows us to register a new listener (a
function) for the given event type (a string).
The Observer pattern defines an object (called subject) that can notify
a set of observers (or listeners) when a change in its state occurs.
•  once(event, listener): This method registers a new listener, which is then
removed after the event is emitted for the first time.
•  emit(event, [arg1], [...]): This method produces a new event and
provides additional arguments to be passed to the listeners.
•  removeListener(event, listener): This method removes a listener for the
specified event type.
*/
