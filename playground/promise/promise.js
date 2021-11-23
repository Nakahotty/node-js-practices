const States = require('./states.js');
const {getThen, doResolve} = require('./utils');

class Promise {
    constructor() {
        this.value = null; // value of the promise once fulfilled/rejected
        this.state = States.PENDING;
        this.callbacks = [];
    }

    greet() {
        console.log('Hello, I am a Promise!');
        console.log(`Status - ${this.state}`);
    }

    fulfill(result) {
        this.value = result;
        this.state = States.FULFILLED;
    }

    reject(error) {
        this.error = error;
        this.state = States.REJECTED;
    }

    resolve(result) {
        try {
            const then = getThen(result);
            if (then) {
                // if result is a promise we wait for it to return 
                doResolve(then.bind(result), resolve, reject); // set the this of then to result
                return;
            }
            this.fulfill(result); // a promise should never be fulfilled with another promise!
        } catch (error) {
            this.reject(error);
        }
    }
};

const p = new Promise();
p.greet();