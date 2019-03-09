import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button, Container, CloseStyled } from './Modal.style';

const Modal = ({ onClose, title, description }) => {
	const containerRef = useRef(null);

	const _handleKeyPress = (event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	};

	const _setFocusOnModal = () => {
		if (containerRef && containerRef.current) {
			containerRef.current.focus();
		}
	};
	
	useEffect(() => {
		const focusedElBeforeOpen = document.activeElement;
		document.addEventListener('keydown', _handleKeyPress);
		_setFocusOnModal();

		return () => {
			focusedElBeforeOpen.focus();
			document.removeEventListener('keydown', _handleKeyPress);
		} ;
	}, []);

	return (
		<Container
			ref={ containerRef }
			role="dialog"
			aria-labelledby={ title }
			aria-describedby={ description }>
			<Button type="button" onClick={ onClose }>
				<CloseStyled aria-label="Close Modal" />
			</Button>
		</Container>
	);
};

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
};

Modal.defaultProps = {
	description: '',
};

export default Modal;
