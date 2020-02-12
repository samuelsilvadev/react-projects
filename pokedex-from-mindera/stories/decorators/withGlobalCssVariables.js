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
        --dark-sky-blue: #4098d7;
        --royal: #0b1d96;
        --light-purple: #a368fc;
        --brick: #ba2525;
        --sap-green: #63921a;
        --greeny-blue: #3ebd93;
        --dark-sea-green: #0c6b58;
        --macaroni-and-cheese: #f0b429;
    }
`;

export const WithGlobalCssVariables = ({ children }) => (
	<Fragment>
		<style jsx>{styles}</style>
		{children}
	</Fragment>
);
