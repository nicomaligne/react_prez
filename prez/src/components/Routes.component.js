import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Step6 } from './Step6'
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
					<Route path="/step2" render={() => <Step2 items={items} />} />
					<Route path="/step3" render={() => <Step3 items={items} />} />
					<Route path="/step4" render={() => <Step4 items={items} />} />
					<Route path="/step5" render={() => <Step5 items={items} />} />
					<Route path="/step6" render={() => <Step6 items={items} />} />
				</Switch>
			</MainContainer>
		</React.Fragment>
	)
}
