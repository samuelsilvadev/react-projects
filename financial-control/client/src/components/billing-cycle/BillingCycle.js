import React from 'react';

import { TabsProvider } from '@shared/context';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from '@components/tabs';

import List from './BillingCycleList';

export function BillingCycle() {
	return (
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
	)
}

export default BillingCycle;
