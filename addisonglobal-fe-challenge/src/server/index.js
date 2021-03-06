import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import configureStore from '../common/store/configureStore';

import App from '../common/App';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('/*', (req, res) => {
		const context = {};
		const preloadedState = {};
		const store = configureStore(preloadedState);
		const markup = renderToString(
			<Provider store={store}>
				<StaticRouter context={context} location={req.url}>
					<App />
				</StaticRouter>
			</Provider>
		);

		const finalState = store.getState();

		if (context.url) {
			res.redirect(context.url);
		} else {
			res.status(200).send(
				`<!doctype html>
					<html lang="">
						<head>
							<meta http-equiv="X-UA-Compatible" content="IE=edge" />
							<meta charset="utf-8" />
							<title>Addison Global Frontend Technical Assesement</title>
							<meta name="viewport" content="width=device-width, initial-scale=1">
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

							<link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
						</head>
						<body>
							<div id="root">${markup}</div>
							<script>
								window.__PRELOADED_STATE__ = ${serialize(finalState)}
							</script>
						</body>
					</html>`
			);
		}
	});

export default server;
