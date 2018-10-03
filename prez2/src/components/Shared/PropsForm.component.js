import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;

	& form {
		margin-bottom: 30px;
	}
`

const LabelMarged = styled.label`
	margin-right: 40px;
`

export class PropsForm extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	constructor(props) {
		super(props)
		this.state = {
			multiSelect: true,
			preventClosingLastItem: false,
			position: 'above',
			renderExpandAllButton: false,
			tabs: false,
		}
	}

	changeCheckBoxStateAttribute = event => {
		event.persist()
		this.setState(prevState => ({ ...prevState, [event.target.name]: event.target.checked }))
	}

	handleChange = event => {
		event.persist()
		this.setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
	}

	render() {
		return (
			<Container>
				<form>
					<div>
						<LabelMarged htmlFor="multiSelect">
							multiSelect
							<input
								id="multiSelect"
								name="multiSelect"
								type="checkbox"
								checked={this.state.multiSelect}
								onChange={this.changeCheckBoxStateAttribute}
							/>
						</LabelMarged>
						<LabelMarged htmlFor="tabs">
							Tabs
							<input
								id="tabs"
								name="tabs"
								type="checkbox"
								checked={this.state.tabs}
								onChange={this.changeCheckBoxStateAttribute}
							/>
						</LabelMarged>
						<LabelMarged htmlFor="preventClosingLastItem">
							preventClosingLastItem
							<input
								id="preventClosingLastItem"
								name="preventClosingLastItem"
								type="checkbox"
								checked={this.state.preventClosingLastItem}
								onChange={this.changeCheckBoxStateAttribute}
							/>
						</LabelMarged>
						<LabelMarged htmlFor="position">
							Position:
							<select
								id="position"
								name="position"
								value={this.state.position}
								onChange={this.handleChange}
							>
								<option value="above">above</option>
								<option value="beside">beside</option>
								<option value="left">left</option>
								<option value="right">right</option>
							</select>
						</LabelMarged>
					</div>
				</form>
				<div>{this.props.children({ ...this.props, ...this.state })}</div>
			</Container>
		)
	}
}

export default PropsForm
