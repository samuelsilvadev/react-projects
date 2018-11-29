require('dotenv').config();

const args = require('minimist')(process.argv.slice(2));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const { app: { port: serverPort }, db: { host, port, name } } = require('./config');

const usedPort = args.port || serverPort;

mongoose.connect(
	`mongodb://${host}:${port}/${name}`,
	{
		useNewUrlParser: true,
	},
);

app.use((req, res, next) => {
	req.io = io;

	return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(usedPort, () => {
	console.log('Server started..', usedPort);
});


module.exports = server;
