import React from 'react';

import { WrapperDiv, ContentDiv, IconWrapperDiv, H3, P } from './ValueBox.style';

export function ValueBox(props) {
	const { title, text, icon, className } = props;

	return (
		<WrapperDiv className={ className }>
			<ContentDiv>
				<H3>{ title }</H3>
				<P>{ text }</P>
			</ContentDiv>
			<IconWrapperDiv>
				{	icon &&
					<span>{ icon }</span>
				}
			</IconWrapperDiv>
		</WrapperDiv>
	);
}

export default ValueBox;
