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
		this.setState(
			prevState => ({
				open: (this.props.opened && !this.props.opened) || !prevState.open,
			}),
			this.props.onClick(this.props.index),
		)
	}

	render() {
		return <button onClick={this.onClick}>{this.state.open ? 'open' : 'closed'}</button>
	}
}

function Content(props) {
	return props.opened ? <p>{props.children}</p> : null
}

export { Item, Button, Content }
