require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

console.log(process.env.DB_USER);

mongoose.connect(
	`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds111078.mlab.com:11078/${process.env.DB_NAME}`,
	{
		useNewUrlParser: true,
	},
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
	console.log('Server started..', 3000);
});
