const winston = require('winston');

let logger = new (winston.Logger) ({
    transports: [
        new (winston.transports.Console) ({colorize: true}),
        new (winston.transports.File) ({ filename: 'combined.log'})
    ]
});

module.exports = {
    logger
}