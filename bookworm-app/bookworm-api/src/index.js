const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URL);

const auth = require('./routes/auth');
const users = require('./routes/users');

app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));
