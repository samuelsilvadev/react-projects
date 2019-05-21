import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { TabsProvider } from '@shared/context';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from '@components/tabs';

import List from './BillingCycleList';

import { TABS_THEME } from './BillingCycle.style';

export function BillingCycle() {
	return (
		<ThemeProvider theme={ TABS_THEME }>
			<TabsProvider>
				<Tabs>
					<TabHeader>
						<TabTitle label="Register" id="register" />
						<TabTitle label="List" id="list" />
					</TabHeader>
					<TabBody>
						<TabContent id="register">
							Register Content
					</TabContent>
						<TabContent id="list">
							<List />
						</TabContent>
					</TabBody>
				</Tabs>
			</TabsProvider>
		</ThemeProvider>
	)
}

export default BillingCycle;
