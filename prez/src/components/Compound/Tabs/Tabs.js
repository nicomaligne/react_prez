import React from 'react'
import { BaseAccordionTabs } from '../Core'

function Item(props) {
	return (
		<li style={{ float: 'left', paddingRight: '100px', width: '100px' }}>{props.children}</li>
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
		const style = this.state.open ? { backgroundColor: 'blue' } : { backgroundColor: 'white' }
		return (
			<button type="button" style={style} onClick={this.onClick}>
				{this.props.title}
			</button>
		)
	}
}

function Content(props) {
	return props.opened ? <p>{props.children}</p> : null
}

export default class Tabs extends React.Component {
	static Item = Item

	static Button = Button

	static Content = Content

	render() {
		return (
			<BaseAccordionTabs>
				{({ openIndexes, onClick }) => this.props.children({ openIndexes, onClick })}
			</BaseAccordionTabs>
		)
	}
}
