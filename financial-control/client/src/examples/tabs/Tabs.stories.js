import React from 'react';
import { storiesOf } from '@storybook/react';

import { TabsProvider } from './../../shared/context';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from './../../components/tabs';

storiesOf('Components', module)
	.add('Tabs', () => (
		<Tabs>
			<TabsProvider>
				<TabHeader>
					<TabTitle label="Register" id="tab-1" />
					<TabTitle label="Edit" id="tab-2" />
					<TabTitle label="List" id="tab-3" />
				</TabHeader>
				<TabBody>
					<TabContent id="tab-1">
						Register Content
					</TabContent>
					<TabContent id="tab-2">
						Edit Content
					</TabContent>
					<TabContent id="tab-3">
						List Content
					</TabContent>
				</TabBody>
			</TabsProvider>
		</Tabs>
	));
