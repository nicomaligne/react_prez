import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Step1 from './Step1'
import items from './Shared/data'

export default function Routes() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/step1" render={() => <Step1 items={items} />} />
			</Switch>
		</React.Fragment>
	)
}
