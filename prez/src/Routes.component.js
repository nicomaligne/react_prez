import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Step1 from './final/Step1'
import Step2 from './final/Step2'
import Step3 from './final/Step3'
import { Step4 } from './final/Step4'
import { Step5 } from './final/Step5'
import { Step6 } from './final/Step6'
import ExerciceStep1 from './exercices/Step1'
import ExerciceStep2 from './exercices/Step2'
import ExerciceStep3 from './exercices/Step3'
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
					<Route
						path="/step1"
						render={() => <Step1 items={items} openClassName="opened" />}
					/>
					<Route
						path="/step2"
						render={() => <Step2 items={items} openClassName="opened" />}
					/>
					<Route
						path="/step3"
						render={() => <Step3 items={items} openClassName="opened" />}
					/>
					<Route
						path="/step4"
						render={() => <Step4 items={items} openClassName="opened" />}
					/>
					<Route
						path="/step5"
						render={() => <Step5 items={items} openClassName="opened" />}
					/>
					<Route
						path="/step6"
						render={() => <Step6 items={items} openClassName="opened" />}
					/>
					<Route
						path="/exercice-step1"
						render={() => <ExerciceStep1 items={items} openClassName="opened" />}
					/>
					<Route
						path="/exercice-step2"
						render={() => <ExerciceStep2 items={items} openClassName="opened" />}
					/>
					<Route
						path="/exercice-step3"
						render={() => <ExerciceStep3 items={items} openClassName="opened" />}
					/>
				</Switch>
			</MainContainer>
		</React.Fragment>
	)
}
