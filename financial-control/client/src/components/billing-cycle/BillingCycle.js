import React, { useState } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { ThemeProvider } from 'emotion-theming';

import { TabsProvider, useTabs } from '@shared/context';
import { actions } from '@shared/state/billing-cycle';
import { Tabs, TabHeader, TabTitle, TabBody, TabContent } from '@components/tabs';

import Form from './form/BillingCycleForm';
import List from './list/BillingCycleList';

import { TABS_THEME } from './BillingCycle.style';

import { FORMS_NAMES } from './constants';

const TABS_IDS = {
	REGISTER: 'register',
	LIST: 'list',
	EDIT: 'edit',
	REMOVE: 'remove',
};

export function BillingCycle(props) {
	const [tabsTitlesToHide, setTabsToHide] = useState([TABS_IDS.EDIT, TABS_IDS.REMOVE]);

	return (
		<ThemeProvider theme={TABS_THEME}>
			<TabsProvider selected={TABS_IDS.REGISTER}>
				<Tabs>
					<TabHeader titlesToHide={tabsTitlesToHide}>
						<TabTitle label="Register" id={TABS_IDS.REGISTER} />
						<TabTitle label="List" id={TABS_IDS.LIST} />
						<TabTitle label="Edit" id={TABS_IDS.EDIT} />
						<TabTitle label="Remove" id={TABS_IDS.REMOVE} />
					</TabHeader>
					<TabBodyContainer {...props} setTabsToHide={setTabsToHide} />
				</Tabs>
			</TabsProvider>
		</ThemeProvider>
	)
}

function TabBodyContainer(props) {
	const {
		save,
		update,
		remove,
		initializeForm,
		registerData,
		updateData,
		removeData,
		setTabsToHide,
	} = props;

	const { setSelected } = useTabs();

	const _onSuccess = () => {
		setTabsToHide([TABS_IDS.EDIT, TABS_IDS.REMOVE]);
		setSelected(TABS_IDS.LIST);
	};

	const _handleFormActions = (tabIdToSelect) => (data) => {
		const tabsToHide = Object.values(TABS_IDS).filter((key) => key !== tabIdToSelect);

		setTabsToHide(tabsToHide);
		setSelected(tabIdToSelect);
		initializeForm(FORMS_NAMES.BILLING_CYCLE_FORM, data);
	};

	return (
		<TabBody>
			<TabContent id={TABS_IDS.REGISTER}>
				<Form
					onSubmit={save}
					onCancel={() => { setSelected(TABS_IDS.LIST); }}
					{...registerData} />
			</TabContent>
			<TabContent id={TABS_IDS.LIST}>
				<List
					showEdit
					showRemove
					onEdit={_handleFormActions(TABS_IDS.EDIT)}
					onRemove={_handleFormActions(TABS_IDS.REMOVE)} />
			</TabContent>
			<TabContent id={TABS_IDS.EDIT}>
				<Form
					onSubmit={update}
					redirect={_onSuccess}
					onCancel={_onSuccess}
					{...updateData} />
			</TabContent>
			<TabContent id={TABS_IDS.REMOVE}>
				<Form
					submitLabel="Remove"
					readOnly
					onSubmit={remove}
					redirect={_onSuccess}
					onCancel={_onSuccess}
					canRenderListIfHasNoData={ false }
					{...removeData} />
			</TabContent>
		</TabBody>
	)
}

function mapStateToProps(state) {
	const { register, update, remove } = state.billingCycle;

	return {
		registerData: register,
		updateData: update,
		removeData: remove,
	}
}

const mapDispatchToProps = {
	save: actions.create,
	update: actions.update,
	remove: actions.remove,
	initializeForm: initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
