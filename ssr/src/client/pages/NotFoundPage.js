import React from 'react';
import { Helmet } from 'react-helmet';

function renderSeoData() {
    return (
        <Helmet>
            <title>Not Found</title>
            <meta property="og:title" content="Not Found" />
        </Helmet>
    );
}

export function NotFoundPage({ staticContext = {} }) {

    staticContext.notFound = true;

    return (
        <section>
            { renderSeoData() }
            <h1>
                Route not found!
            </h1>
        </section>
    );
}

export default NotFoundPage;
