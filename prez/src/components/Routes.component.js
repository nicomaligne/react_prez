import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Step1 from './Step1'
import items from './Shared/data'

const MainContainer = styled.div`
	display: flex;
	width: 50%;
	padding-left: 25%;
	padding-top: 5%;
	justify-content: center;
`

export default function Routes() {
	return (
		<React.Fragment>
			<Header />
			<MainContainer>
				<Switch>
					<Route path="/step1" render={() => <Step1 items={items} />} />
				</Switch>
			</MainContainer>
		</React.Fragment>
	)
}
