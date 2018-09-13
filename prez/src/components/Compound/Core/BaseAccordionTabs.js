import React from 'react'
import PropTypes from 'prop-types'

export default class BaseAccordionTabs extends React.Component {
	static propTypes = {
		children: PropTypes.func,
		handleClick: PropTypes.func,
	}

	// To avoid undefined callback in setState
	static defaultProps = {
		handleClick: () => {},
	}

	// OpenIndexes save wich items are opened
	state = {
		openIndexes: new Map(),
	}

	// Change the openIndexes state value, and allow a external callback
	handleClick = (index, value) => {
		this.setState(
			prevState => ({
				openIndexes: prevState.openIndexes.set(index, value),
			}),
			this.props.handleClick(index, value),
		)
	}

	// Children as function is mandatory, so we throw an error if children is not a func
	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error('Need children as function')
		}
		return (
			<ul>
				{this.props.children({
					openIndexes: this.state.openIndexes,
					onClick: this.handleClick,
				})}
			</ul>
		)
	}
}
