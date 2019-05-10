import React, { useState, useMemo, useCallback } from 'react';

export const SidebarContext = React.createContext({});

export function SidebarProvider(props) {
	const { children } = props;
	const [isOpen, setOpen] = useState(true);
	
	const toggleOpen = useCallback(() => {
		setOpen(open => !open);
	}, [setOpen]);

	const context = useMemo(() => ({
		isOpen,
		toggleOpen,
	}), [isOpen, toggleOpen]);

	return (
		<SidebarContext.Provider value={ context }>
			{ children }
		</SidebarContext.Provider>
	)
}

export default SidebarContext;
