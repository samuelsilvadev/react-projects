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
	REMOVE: 'remove',
};

export function BillingCycle(props) {
	const {
		save,
		update,
		remove,
		initializeForm,
		registerData,
		updateData,
	} = props;

	const [tabsTitlesToHide, setTabsToHide] = useState([TABS_IDS.EDIT, TABS_IDS.REMOVE]);

	return (
		<ThemeProvider theme={ TABS_THEME }>
			<TabsProvider selected={ TABS_IDS.REGISTER  }>
				<Tabs>
					<TabHeader titlesToHide={ tabsTitlesToHide }>
						<TabTitle label="Register" id={ TABS_IDS.REGISTER } />
						<TabTitle label="List" id={ TABS_IDS.LIST } />
						<TabTitle label="Edit" id={ TABS_IDS.EDIT } />
						<TabTitle label="Remove" id={ TABS_IDS.REMOVE } />
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
											showRemove
											onEdit={ (data) => {
												setTabsToHide([TABS_IDS.REGISTER, TABS_IDS.LIST, TABS_IDS.REMOVE]);
												setSelected(TABS_IDS.EDIT);
												initializeForm(FORMS_NAMES.BILLING_CYCLE_FORM, data);
											} }
											onRemove={ (data) => {
												setTabsToHide([TABS_IDS.REGISTER, TABS_IDS.EDIT, TABS_IDS.LIST]);
												setSelected(TABS_IDS.REMOVE);
												initializeForm(FORMS_NAMES.BILLING_CYCLE_FORM, data);
											} } />
									</TabContent>
									<TabContent id={ TABS_IDS.EDIT }>
										<Form
											onSubmit={ update }
											onCancel={ () => {
												setTabsToHide([TABS_IDS.EDIT, TABS_IDS.REMOVE]);
												setSelected(TABS_IDS.LIST);
											} }
											{ ...updateData } />
									</TabContent>
									<TabContent id={ TABS_IDS.REMOVE }>
										<Form
											submitLabel="Remove"
											readOnly
											onSubmit={ remove }
											onCancel={ () => {
												setTabsToHide([TABS_IDS.EDIT, TABS_IDS.REMOVE]);
												setSelected(TABS_IDS.LIST);
											} } />
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
	remove: actions.remove,
	initializeForm: initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
