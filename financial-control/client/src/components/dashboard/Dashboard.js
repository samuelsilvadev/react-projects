import React, { Fragment } from 'react';

import { H1, GridDiv, StyledValueBox } from './Dashboard.style';

export function Dashboard() {
	return (
		<Fragment>
			<H1>Dashboard</H1>
			<GridDiv>
				<StyledValueBox type="credit" title="$ 10.000" text="Credits Total"/>
				<StyledValueBox type="debit" title="$ 10" text="Debts Total"/>
				<StyledValueBox type="consolidated" title="$ 0" text="Consolidated Value"/>
			</GridDiv>
		</Fragment>
	)
}

export default Dashboard;
