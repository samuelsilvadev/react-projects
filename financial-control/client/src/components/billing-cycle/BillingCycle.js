import React, { useState } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { ThemeProvider } from 'emotion-theming';

import { TabsProvider, TabsContext } from '@shared/context';
import { actions } from '@shared/state/billing-cycle';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from '@components/tabs';

import Form from './BillingCycleForm';
import List from './BillingCycleList';

import { TABS_THEME } from './BillingCycle.style';

import { FORMS_NAMES } from './constants';

const TABS_IDS = {
	REGISTER: 'register',
	LIST: 'list',
	EDIT: 'edit',
};

export function BillingCycle(props) {
	const {
		save,
		update,
		initializeEditForm,
		registerData,
		updateData,
	} = props;

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
										<Form
											onSubmit={ save }
											onCancel={ () => { setSelected(TABS_IDS.LIST); } }
											{ ...registerData } />
									</TabContent>
									<TabContent id={ TABS_IDS.LIST }>
										<List
											showEdit
											onEdit={ (data) => {
												setTabsToHide([TABS_IDS.REGISTER, TABS_IDS.LIST]);
												setSelected(TABS_IDS.EDIT);
												initializeEditForm(FORMS_NAMES.BILLING_CYCLE_FORM, data);
											} } />
									</TabContent>
									<TabContent id={ TABS_IDS.EDIT }>
										<Form
											onSubmit={ update }
											onCancel={ () => {
												setTabsToHide([TABS_IDS.EDIT]);
												setSelected(TABS_IDS.LIST);
											} }
											{ ...updateData } />
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

function mapStateToProps(state) {
	const { register, update } = state.billingCycle;

	return {
		registerData: register,
		updateData: update, 
	}
}

const mapDispatchToProps = {
	save: actions.create,
	update: actions.update,
	initializeEditForm: initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
