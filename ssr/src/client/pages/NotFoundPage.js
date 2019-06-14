import React from 'react';

export function NotFoundPage({ staticContext = {} }) {

    staticContext.notFound = true;

    return (
        <h1>
            Route not found!
        </h1>
    );
}

export default NotFoundPage;
