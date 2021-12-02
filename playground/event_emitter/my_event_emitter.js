class MyEventEmitter {
    constructor() {
        this.events = {};  // pairs of <event, callback> or as a map events[event] -> callback
    }

    on (event, callback) {
        if (!this.events[event]) {
            this.events[event] = []; // we instantiate an empty array of "callbacks" to the event
        } 

        this.events[event].push(callback); // 
    }

    removeListener(event, callbackToRemove) {
        if (!this.events[event]) {
           throw new Error(`Cannot remove the listener. Event ${event} does not exist`); 
        }

        const filterCallbacks = (callback) => {
            return callback !== callbackToRemove; // we store every callback except the one we want to remove
        }

        this.events[event] = this.events[event].filter(filterCallbacks);
    }
 
    emit (event, data) {
        // the data comes from callback parameters
        if (!this.events[event]) {
            throw new Error(`Cannot fire listener. Event ${event} does not exist`); 
        }

        const fireCallbacks = callback => callback(data); // function to execute callback with data

        this.events[event].forEach(fireCallbacks); // execute every callback for the certain event
    }
}

module.exports = MyEventEmitter;