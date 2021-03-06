import React, { useState, useMemo, useContext } from 'react';

export const TabsContext = React.createContext();

export function TabsProvider(props) {
	const [selected, setSelected] = useState(props.selected);

	const context = useMemo(() => ({
		selected,
		setSelected,
	}), [selected, setSelected]);

	return <TabsContext.Provider value={ context } { ...props } />
}

export function useTabs() {
	const context = useContext(TabsContext);

	if (!context) {
		throw new Error('useTabs must be used within a TabsProvider');
	}

	return context;
}
