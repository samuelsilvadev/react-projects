import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { TabsProvider } from './../../shared/context';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from './../../components/tabs';

storiesOf('Components/Tabs', module)
	.addDecorator(withKnobs)
	.add('General Tabs', () => (
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
	))
	.add('Tabs with hidden title', () => {
		const options = {
			Register: 'tab-1',
			Edit: 'tab-2',
			List: 'tab-3',
		};
		
		const titlesToHide = select('titlesToHide', options, '')

		return (
			<Tabs>
				<TabsProvider>
					<TabHeader titlesToHide={titlesToHide}>
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
		)
	});
