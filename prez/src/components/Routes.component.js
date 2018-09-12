import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Step1 from './Step1'
import items from './Shared/data'
import { Accordion } from './Compound'

const myItems = [
	{
		title: 'ItemA',
		content: 'Item A content',
	},
	{
		title: 'ItemB',
		content: 'Item B content',
	},
]

export default function Routes() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/step1" render={() => <Step1 items={items} />} />
				<Route path="/step2" render={() => <Accordion items={myItems} />} />
			</Switch>
		</React.Fragment>
	)
}
