const winston = require('winston');

let logger = new (winston.Logger) ({
    transports: [
        new (winston.transports.Console) ({
            colorize: true
            }),
        new (winston.transports.File) ({
             filename: 'combined.log'
            }),
        new (winston.transports.File)({
            name: 'error-log',
            filename: 'error.log',
            level: 'error'
          })
    ]
});

module.exports = {
    logger
}