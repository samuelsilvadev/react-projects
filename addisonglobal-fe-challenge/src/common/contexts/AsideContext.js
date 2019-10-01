import React, { useState, useContext } from 'react';

const AsideContext = React.createContext();

export const AsideContextProvider = (props) => {
	const [isAsideVisible, setAsideVisible] = useState(false);

	const handleOpen = () => {
		setAsideVisible(true);
	};

	const handleClose = () => {
		setAsideVisible(false);
	};

	const context = {
		isAsideVisible,
		handleOpen,
		handleClose
	};

	return <AsideContext.Provider {...props} value={context} />;
};

export const useAsideContext = () => {
	return useContext(AsideContext);
};

export function withAsideContext(Component) {
	function WithAsideContext(props) {
		return (
			<AsideContextProvider>
				<Component {...props} />
			</AsideContextProvider>
		);
	}

	return WithAsideContext;
}
