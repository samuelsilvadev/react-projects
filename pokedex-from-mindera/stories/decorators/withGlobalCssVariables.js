import React, { Fragment } from 'react';

const styles = `
    :root {
        --light-sky-blue: #d9e2ec;
        --white: #fff;
        --pale-grey: #f0f4f8;
        --metallic-blue: #486581;
        --greeny-blue: #3ebd93;
        --dark-blue-green: #014d40;
        --dark-grey-blue: #334e68;
        --seaweed-green: #35b378;
        --dark-slate-blue: #102a43;
        --greyish-blue: #627d98;
    }
`;

export const WithGlobalCssVariables = ({ children }) => (
	<Fragment>
		<style jsx>{styles}</style>
		{children}
	</Fragment>
);
