import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../common/App';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

const getMarkup = ({ styleTags, markup }) => `
	<!doctype html>
		<html lang="">
			<head>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta charset="utf-8" />
				<title>Agrotis Challenge</title>
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
				${
					assets.client.css
						? `<link rel="stylesheet" href="${assets.client.css}">`
						: ''
				}
				${
					process.env.NODE_ENV === 'production'
						? `<script src="${assets.client.js}" defer></script>`
						: `<script src="${assets.client.js}" defer crossorigin></script>`
				}
				${styleTags}
			</head>
			<body>
				<div id="root">${markup}</div>
			</body>
</html>`;

server
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('/*', (req, res) => {
		const sheet = new ServerStyleSheet();
		const appMarkup = sheet.collectStyles(<App />);
		const styleTags = sheet.getStyleTags();

		const context = {};
		const markup = renderToString(
			<StaticRouter context={context} location={req.url}>
				{appMarkup}
			</StaticRouter>
		);

		if (context.url) {
			res.redirect(context.url);
		} else {
			res.status(200).send(getMarkup({ styleTags, markup }));
		}
	});

export default server;
