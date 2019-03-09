import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, CloseStyled } from './Modal.style';

const Modal = ({ onClose }) => {
	const _handleKeyPress = (event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	};
	
	useEffect(() => {
		document.addEventListener('keydown', _handleKeyPress);

		return () => {
			document.removeEventListener('keydown', _handleKeyPress);
		} ;
	}, []);

	return (
		<Container>
			<CloseStyled onClick={ onClose } />
		</Container>
	);
};

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default Modal;
