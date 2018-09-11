import React from 'react'
import PropTypes from 'prop-types'

export class Accordion extends React.Component {
	static propTypes = {
		openIndexes: PropTypes.array,
		children: PropTypes.func,
	}

	constructor(props) {
		super(props)
		this.state = {
			openIndexes: [0],
		}
	}

	getState = (state = this.state) => ({
		openIndexes:
			this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes,
	})

	handleItemClick = index => {
		this.setState(prevState => ({
			openIndexes: prevState.openIndexes.includes(index)
				? prevState.openIndexes.filter(i => i !== index)
				: [...prevState.openIndexes, index],
		}))
	}

	render() {
		return this.props.children({
			openIndexes: this.state.openIndexes,
			handleItemClick: this.handleItemClick,
		})
	}
}
