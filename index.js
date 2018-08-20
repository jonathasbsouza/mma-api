const http = require('http');
const winston = require('winston');
const logger = require('./src/config/logger');

require('dotenv').config();

winston.add(logger());

const app = require('./src/app');

const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

server.listen(PORT, () => {
    winston.info(`Server listening at ${PORT}`);
});

server.on('error', (err) => {
    winston.error(err.message);
});