import pkg from 'signale';
const { Signale } = pkg;

class Logger extends Signale {
    constructor() {
        super({
            config: {
                displayDate: true,
                displayTimestamp: true,
                displayFilename: false
            }
        });
    }
}

const logger = new Logger();
export default logger;