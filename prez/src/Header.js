/* eslint-disable react/prefer-stateless-function */

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkBar = styled.div`
	text-align: center;
`

const LinkButton = styled.button`
	padding: 10px;
	margin: 0 5px;
`

class Links extends React.Component {
	render() {
		return (
			<LinkBar>
				<span>
					Exercices :
					<Link to="/exercice-step1" href="/exercice-step1">
						<LinkButton>Step1</LinkButton>
					</Link>
					<Link to="/exercice-step2" href="/exercice-step2">
						<LinkButton>Step2</LinkButton>
					</Link>
					<Link to="/exercice-step3" href="/exercice-step3">
						<LinkButton>Step3</LinkButton>
					</Link>
				</span>
				<span>
					Final :
					<Link to="/step1" href="/step1">
						<LinkButton>Step1</LinkButton>
					</Link>
					<Link to="/step2" href="/step2">
						<LinkButton>Step2</LinkButton>
					</Link>
					<Link to="/step3" href="/step3">
						<LinkButton>Step3</LinkButton>
					</Link>
					<Link to="/step4" href="/step4">
						<LinkButton>Step4</LinkButton>
					</Link>
					<Link to="/step5" href="/step5">
						<LinkButton>Step5</LinkButton>
					</Link>
					<Link to="/step6" href="/step6">
						<LinkButton>Step6</LinkButton>
					</Link>
					<Link to="/revolution" href="/revolution">
						<LinkButton>Revolution</LinkButton>
					</Link>
				</span>
			</LinkBar>
		)
	}
}

export default Links

/* eslint-enable react/prefer-stateless-function */
