import React from 'react'
import PropTypes from 'prop-types'

const setSingleOpenIndexes = index => state => ({
	...state,
	openIndexes: state.openIndexes.includes(index) ? [] : [index],
})

const setOpenIndexes = index => state => ({
	openIndexes: state.openIndexes.includes(index)
		? state.openIndexes.filter(i => i !== index)
		: [...state.openIndexes, index],
})

export default class OpenIndexManager extends React.Component {
	static defaultProps = {
		handlerOpenIndex: () => {},
		single: false,
	}

	static propTypes = {
		children: PropTypes.node,
		handlerOpenIndex: PropTypes.func,
		single: PropTypes.bool,
	}

	state = {
		openIndexes: [0],
	}

	handleItemClick = index => {
		if (this.props.single) {
			return this.setState(
				setSingleOpenIndexes(index),
				this.props.handlerOpenIndex,
			)
		}
		return this.setState(setOpenIndexes(index), this.props.handlerOpenIndex)
	}

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error('children is not a function')
		}
		return (
			<React.Fragment>
				{this.props.children({
					handleItemClick: this.handleItemClick,
					openIndexes: this.state.openIndexes,
				})}
			</React.Fragment>
		)
	}
}
