import React from 'react'
import { BaseAccordionTabs } from '../Core'

/*
    Basic code for compound
    Need to add more controlled stuff and the provider pattern
 */

function AccordionItem(props) {
	return <span>{props.title}</span>
}

/**
 * Compare wih indexes to allow manipulation from outside,
 * but with his own state
 */
class AccordionButton extends React.Component {
	state = {
		open: false,
	}

	onClick = () => {
		this.setState(
			prevState => ({
				open: !prevState.open,
			}),
			this.props.onClick(this.props.index, this.state.open),
		)
	}

	render() {
		return <button onClick={this.onClick}>{this.state.open ? 'open' : 'closed'}</button>
	}
}

function AccordionContent(props) {
	return <p>{props.children}</p>
}

/*
    Change name to my accordion the real component accordion is the base one
 */
class Accordion extends React.Component {
	static Item = AccordionItem

	static Button = AccordionButton

	static Content = AccordionContent

	render() {
		return (
			<BaseAccordionTabs>
				{({ openIndexes, onClick }) => this.props.children({ openIndexes, onClick })}
			</BaseAccordionTabs>
		)
	}
}

export default Accordion
