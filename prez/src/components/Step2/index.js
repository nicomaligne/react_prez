import React from 'react'
import styled from 'styled-components'
import { EnhancedAccordion } from './EnhancedAccordion.component'

const Container = styled.div`
	display: flex;
	flex-direction: column;

	& form {
		margin-bottom: 10px;
	}
`

export class Accordion extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			single: false,
			preventClose: false,
			openTrigger: '',
			closeTrigger: '',
			titleClassName: '',
			contentClassName: '',
			onTrigger: () => {
				console.log('test')
			},
			closeClassName: '',
			openClassName: '',
			renderExpandAllButton: false,
			tabs: false,
		}
	}

	changeCheckBoxStateAttribute = event => {
		event.persist()
		this.setState(prevState => ({ ...prevState, [event.target.name]: event.target.checked }))
	}

	render() {
		return (
			<Container>
				<form>
					<div>
						<label htmlFor="single">
							Single
							<input
								id="single"
								name="single"
								type="checkbox"
								checked={this.state.single}
								onChange={this.changeCheckBoxStateAttribute}
							/>
						</label>
						<label htmlFor="tabs">
							Tabs
							<input
								id="tabs"
								name="tabs"
								type="checkbox"
								checked={this.state.tabs}
								onChange={this.changeCheckBoxStateAttribute}
							/>
						</label>
					</div>
				</form>
				<div key={JSON.stringify(this.state)}>
					<EnhancedAccordion {...this.props} {...this.state} />
				</div>
			</Container>
		)
	}
}

export default Accordion
