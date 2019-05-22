import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { TabsProvider } from '@shared/context';
import { actions } from '@shared/state/billing-cycle';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from '@components/tabs';

import Form from './BillingCycleForm';
import List from './BillingCycleList';

import { TABS_THEME } from './BillingCycle.style';

export function BillingCycle(props) {
	const { save } = props;

	return (
		<ThemeProvider theme={ TABS_THEME }>
			<TabsProvider selected="register">
				<Tabs>
					<TabHeader>
						<TabTitle label="Register" id="register" />
						<TabTitle label="List" id="list" />
					</TabHeader>
					<TabBody>
						<TabContent id="register">
							<Form onSubmit={ save } />
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

const mapDispatchToProps = {
	save: actions.create
};

export default connect(null, mapDispatchToProps)(BillingCycle);
