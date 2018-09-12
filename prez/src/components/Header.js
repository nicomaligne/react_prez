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
				<Link to="/step1" href="/step1">
					<LinkButton>Step1</LinkButton>
				</Link>
				<Link to="/step2" href="/step2">
					<LinkButton>Step2</LinkButton>
				</Link>
			</LinkBar>
		)
	}
}

export default Links

/* eslint-enable react/prefer-stateless-function */
