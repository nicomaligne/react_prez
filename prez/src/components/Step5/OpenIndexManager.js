import React from 'react'
import PropTypes from 'prop-types'

export default class OpenIndexManager extends React.Component {
	state = {
		openIndexes: [0],
	}

	static propTypes = {
		single: PropTypes.bool,
		children: PropTypes.func,
		clickCallBack: PropTypes.func,
	}

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
		return this.setState(prevState => ({
			openIndexes: prevState.openIndexes.includes(index)
				? prevState.openIndexes.filter(i => i !== index)
				: [...prevState.openIndexes, index],
		}), this.props.clickCallBack)
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
