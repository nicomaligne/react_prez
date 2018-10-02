import React from 'react'
import PropTypes from 'prop-types'

const OpenIndexManagerContext = React.createContext()

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
		children: PropTypes.array,
		handlerOpenIndex: PropTypes.func,
		multiSelect: PropTypes.bool,
		preventClosingLastItem: PropTypes.bool,
	}

	static Consumer = props => (
		<OpenIndexManagerContext.Consumer {...props}>
			{context => {
				if (!context) {
					throw new Error(
						'OpenIndexManager Consumer components cannot be rendered outside the OpenIndexManager Provider',
					)
				}
				return props.children(context)
			}}
		</OpenIndexManagerContext.Consumer>
	)

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

	state = {
		openIndexes: [0],
		handleItemClick: this.handleItemClick,
	}

	render() {
		return (
			<OpenIndexManagerContext.Provider value={this.state}>
				{this.props.children}
			</OpenIndexManagerContext.Provider>
		)
	}
}
