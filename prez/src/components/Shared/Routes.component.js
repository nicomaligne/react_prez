import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';

export default function Routes() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				{/* <Route path="/stateless" component={Stateless} />
				<Route path="/react-component" component={ReactComponent} />
				<Route path="/react-pure-component" component={ReactPureComponent} /> */}
			</Switch>
		</React.Fragment>
	);
}
