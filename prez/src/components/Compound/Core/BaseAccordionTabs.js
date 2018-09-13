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

	// OpenIndexes save wich items are opened
	state = {
		openIndexes: [],
	}

	// Change the openIndexes state value, and allow a external callback
	handleClick = index => {
		this.setState(prevState => {
			if (prevState.openIndexes.includes(index)) {
				return { openIndexes: prevState.openIndexes.filter(open => open !== index) }
			}
			prevState.openIndexes.push(index)
			return { openIndexes: prevState.openIndexes }
		}, this.props.handleClick(index))
	}

	// Children as function is mandatory, so we throw an error if children is not a func
	render() {
		// if (typeof this.props.children !== 'function') {
		// 	throw new Error('Need children as function')
		// }
		return (
			<AccordionTabsContext.Provider
				value={{
					openIndexes: this.state.openIndexes,
					onClick: this.handleClick,
				}}
			>
				{this.props.children}
			</AccordionTabsContext.Provider>
		)
	}
}
