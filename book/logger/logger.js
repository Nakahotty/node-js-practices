// export const log = (msg) => {
//     console.log(msg);
// }

// export const DEFAULT_LEVEL = 'info';

// export const LEVELS = {
//     error: 0,
//     debug: 1,
//     warn: 2,
//     data: 3,
//     info: 4,
//     verbose: 5
// }

export default class Logger {
    constructor(name) {
        this.name = name;
    }

    log (msg) {
        console.log(`[${this.name}] ${msg}`);
    }
}
