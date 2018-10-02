import React from 'react'
import PropTypes from 'prop-types'

const preventClose = (openIndexes, index, preventClosingLastItem) => {
	if (preventClosingLastItem && openIndexes.length > 0) {
		return openIndexes
	}
	return openIndexes.filter(i => i !== index)
}

const setOpenIndexes = (index, preventClosingLastItem) => state => ({
	...state,
	openIndexes: state.openIndexes.includes(index)
		? preventClose(state.openIndexes, index, preventClosingLastItem)
		: [index],
})

const setMultiOpenIndexes = (index, preventClosingLastItem) => state => ({
	openIndexes: state.openIndexes.includes(index)
		? preventClose(state.openIndexes, index, preventClosingLastItem)
		: [...state.openIndexes, index],
})

export default class OpenIndexManager extends React.Component {
	static defaultProps = {
		handlerOpenIndex: () => {},
		multiSelect: false,
		preventClosingLastItem: false,
	}

	static propTypes = {
		children: PropTypes.func,
		handlerOpenIndex: PropTypes.func,
		multiSelect: PropTypes.bool,
		preventClosingLastItem: PropTypes.bool,
	}

	state = {
		openIndexes: [0],
	}

	handleItemClick = index => {
		if (this.props.multiSelect) {
			return this.setState(
				setMultiOpenIndexes(index, this.props.preventClosingLastItem),
				this.props.handlerOpenIndex(this.props.type),
			)
		}
		return this.setState(
			setOpenIndexes(index, this.props.preventClosingLastItem),
			this.props.handlerOpenIndex,
		)
	}

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error(
				'OpenIndexManger: this.props.children is not a function, this component implements children as function',
			)
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
