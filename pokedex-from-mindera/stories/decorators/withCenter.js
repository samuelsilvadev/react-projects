import React, { Fragment } from 'react';

const styles = `
    .centered {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
`;

export const WithCenter = ({ children }) => (
	<div className='centered'>
		<style jsx>{styles}</style>
		{children}
	</div>
);
