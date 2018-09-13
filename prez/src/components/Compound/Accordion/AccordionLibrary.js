import React from 'react'

/*
Need to add more controlled stuff and the provider pattern
    Basic code for compound
 */

function Item(props) {
	return (
		<li>
			<span>{props.title}</span>
			{props.children}
		</li>
	)
}

/**
 * Compare wih indexes to allow manipulation from outside,
 * but with his own state
 */
class Button extends React.Component {
	state = {
		open: false,
	}

	onClick = () => {
		const opened = this.props.openedIndexes && this.props.openedIndexes.includes(this.props.index) 
		// if (this.props.index === 0) {
		// 	console.log('value', opened, this.props.openedIndexes, this.props.index, this.props.onClick)
		// }
		this.setState(
			prevState => ({
				open: !opened || !prevState.open,
			}),
			this.props.onClick(this.props.index),
		)
	}

	render() {
		return <button onClick={this.onClick}>{this.state.open ? 'open' : 'closed'}</button>
	}
}

function Content(props) {
	return props.openedIndexes.includes(props.index) ? <p>{props.children}</p> : null
}

export { Item, Button, Content }
