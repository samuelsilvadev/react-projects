import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { TabsProvider, TabsContext } from '@shared/context';
import { actions } from '@shared/state/billing-cycle';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from '@components/tabs';

import Form from './BillingCycleForm';
import List from './BillingCycleList';

import { TABS_THEME } from './BillingCycle.style';

const TABS_IDS = {
	REGISTER: 'register',
	LIST: 'list',
	EDIT: 'edit',
};

export function BillingCycle(props) {
	const { save } = props;
	const [tabsTitlesToHide, setTabsToHide] = useState([TABS_IDS.EDIT]);

	return (
		<ThemeProvider theme={ TABS_THEME }>
			<TabsProvider selected={ TABS_IDS.REGISTER  }>
				<Tabs>
					<TabHeader titlesToHide={ tabsTitlesToHide }>
						<TabTitle label="Register" id={ TABS_IDS.REGISTER } />
						<TabTitle label="List" id={ TABS_IDS.LIST } />
						<TabTitle label="Edit" id={ TABS_IDS.EDIT } />
					</TabHeader>
					<TabsContext.Consumer>
						{
							({ setSelected }) => (
								<TabBody>
									<TabContent id={ TABS_IDS.REGISTER }>
										<Form onSubmit={ save } />
									</TabContent>
									<TabContent id={ TABS_IDS.LIST }>
										<List
											showEdit
											onEdit={ (data) => {
												setTabsToHide([TABS_IDS.REGISTER, TABS_IDS.LIST]);
												setSelected(TABS_IDS.EDIT);
											} } />
									</TabContent>
									<TabContent id={ TABS_IDS.EDIT }>
										<Form />
									</TabContent>
								</TabBody>
								)
						}
					</TabsContext.Consumer>
				</Tabs>
			</TabsProvider>
		</ThemeProvider>
	)
}

const mapDispatchToProps = {
	save: actions.create
};

export default connect(null, mapDispatchToProps)(BillingCycle);
