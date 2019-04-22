require('dotenv').config();
require('./config/database');

const PORT = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const cors = require('./middlewares/cors');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors);

require('./routes')(server);

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
