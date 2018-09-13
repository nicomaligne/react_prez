import React from 'react'
import PropTypes from 'prop-types'

const AccordionTabsContext = React.createContext()

export default class BaseAccordionTabs extends React.Component {
	static Consumer = AccordionTabsContext.Consumer

	static propTypes = {
		// children: PropTypes.func,
		handleClick: PropTypes.func,
	}

	// To avoid undefined callback in setState
	static defaultProps = {
		handleClick: () => {},
	}

	// openedIndexes save wich items are opened
	state = {
		openedIndexes: [],
	}

	// Change the openedIndexes state value, and allow a external callback
	handleClick = index => {
		this.setState(prevState => {
			if (prevState.openedIndexes.includes(index)) {
				return { openedIndexes: prevState.openedIndexes.filter(open => open !== index) }
			}
			prevState.openedIndexes.push(index)
			return { openedIndexes: prevState.openedIndexes }
		}, this.props.handleClick(index))
	}

	// Children as function is mandatory, so we throw an error if children is not a func
	render() {
		// if (typeof this.props.children !== 'function') {
		// 	throw new Error('Need children as function')
		// }
		console.log('state', this.state)
		return (
			<AccordionTabsContext.Provider
				value={{
					openedIndexes: this.state.openedIndexes,
					onClick: this.handleClick,
				}}
			>
				{this.props.children}
			</AccordionTabsContext.Provider>
		)
	}
}
