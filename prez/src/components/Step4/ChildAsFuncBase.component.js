import React from 'react'

export default class ChildAsFuncBase extends React.Component {
	state = {
		openIndexes: [0],
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
		}))
	}

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error('children is not a function')
		}
		return (
			<div>
				{this.props.children({
					handleItemClick: this.handleItemClick,
					openIndexes: this.state.openIndexes,
				})}
			</div>
		)
	}
}
