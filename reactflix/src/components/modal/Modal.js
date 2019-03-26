import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button, Container, CloseStyled } from './Modal.style';

const Modal = ({ children, className, description, onClose, title,  }) => {
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
		};
	}, []);

	return (
		<Container
			ref={ containerRef }
			role="dialog"
			aria-labelledby={ title }
			aria-describedby={ description }
			className={ className }
			data-enzyme-id="modal">
			<Button
				type="button"
				onClick={ onClose }
				data-enzyme-id="modal-close-button">
				<CloseStyled
					aria-label="Close Modal"
					data-enzyme-id="modal-close-icon" />
			</Button>
			{ children }
		</Container>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	description: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
	className: '',
	description: '',
};

export default Modal;
