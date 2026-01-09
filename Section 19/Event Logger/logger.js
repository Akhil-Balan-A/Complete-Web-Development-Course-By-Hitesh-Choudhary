const fs = require('fs');
const os = require('os');
const EventEmitter = require('events');//Events is a class that can be used to create a custom event emitter. it is used to create a event emitter object that emits events.

class Logger extends EventEmitter {
    log(message) {
        this.emit(`message`,{message})
    }

}

const logger = new Logger();

const logFile = './eventlog.txt';

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}\n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message', logToFile);

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log('hello');
logger.log('world');
logger.log('hello');
logger.log('world');    

