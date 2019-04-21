require('dotenv').config();
require('./config/database');

const PORT = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
