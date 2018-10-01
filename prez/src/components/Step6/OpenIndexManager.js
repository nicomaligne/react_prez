import React from 'react'
import PropTypes from 'prop-types'

const OpenIndexManagerContext = React.createContext()

export default class OpenIndexManager extends React.Component {
	static propTypes = {
		single: PropTypes.bool,
		children: PropTypes.array,
		clickCallBack: PropTypes.func,
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
		if (this.props.single) {
			if (this.state.openIndexes.includes(index)) {
				return this.setState(prevState => ({
					...prevState,
					openIndexes: [],
				}))
			}
			return this.setState(prevState => ({
				...prevState,
				openIndexes: [index],
			}))
		}
		return this.setState(
			prevState => ({
				openIndexes: prevState.openIndexes.includes(index)
					? prevState.openIndexes.filter(i => i !== index)
					: [...prevState.openIndexes, index],
			}),
			this.props.clickCallBack,
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
