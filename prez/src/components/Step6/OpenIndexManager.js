import React from 'react'
import PropTypes from 'prop-types'

/*
	We are creating our OpenIndexManager context here.
	No default value, this context must be used inside his Provider component,
	else it will crash.
*/
const OpenIndexManagerContext = React.createContext()

const preventClose = (openIndexes, index, preventClosingLastItem) => {
	if (preventClosingLastItem && openIndexes.length === 1) {
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

	/*
		This is our Consumer component. He's linked to the OpenIndexManager context.
		If there value is undefined, that means this Consumer is used outside this context.
		This makes our API more stronger.
	*/
	static Consumer = props => (
		<OpenIndexManagerContext.Consumer {...props}>
			{value => {
				if (!value) {
					throw new Error(
						'OpenIndexManager Consumer components cannot be rendered outside the OpenIndexManager Provider',
					)
				}
				return props.children(value)
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

	/*
		Every time the openIndexes change, a render will be thrown.
		To avoid create a new object every time in the Provider value,
		we can put the event handler in the state, and pass it to the Provider.
		It's a small perf gain, but still avoid some memory allocation.
	*/
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
