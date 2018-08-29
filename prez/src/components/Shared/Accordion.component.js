import React from 'react'
import PropTypes from 'prop-types'

export class Accordion extends React.Component {
	static propTypes = {
		openIndexes: PropTypes.array,
	}

	getState = (state = this.state) => ({
		openIndexes:
			this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes,
	})

	super(props) {
		this.state = {
			openIndexes: [0],
		}
	}

	handleItemClick = index => {
		this.setState(prevState => ({
			openIndexes: this.state.openIndexes.includes(index)
				? prevState.openIndexes.filter(i => i !== index)
				: [...prevState.openIndexes, index],
		}))
	}

	render() {
		return this.props.children({ openIndexes: this.state.openIndexes, handleItemClick })
	}
}
