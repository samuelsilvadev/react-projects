import React from 'react';
import PropTypes from 'prop-types';

import { Container, CloseStyled } from './Modal.style';

const Modal = ({ onClose }) => {
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
