require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const { app: { port: serverPort }, db: { host, port, name } } = require('./config');

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

server.listen(serverPort, () => {
	console.log('Server started..', serverPort);
});


module.exports = server;
