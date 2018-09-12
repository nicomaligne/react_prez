import React from 'react'

/* eslint-disable */

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
    Simple compound accordion
*/
class BaseAccordion extends React.Component {
	static AccordionItem = AccordionItem

	static AccordionButton = AccordionButton

	static AccordionContent = AccordionContent

	handleClick = (index, value) => {
        console.log('my item value', index, value)
	}

	state = {
		openIndexes: Array.of(this.props.length),
	}

	render() {
		if (typeof this.props.children === 'function') {
			return (
				<ul>
					{this.props.children({
						openIndexes: this.state.openIndexes,
						onClick: this.handleClick,
					})}
				</ul>
			)
		}
		return <ul>{this.props.children}</ul>
	}
}

/*
    Change name to my accordion the real component accordion is the base one
 */
class Accordion extends React.Component {
	render() {
		return (
			<BaseAccordion length={this.props.items.length}>
				{({ openIndexes, onClick }) =>
					this.props.items.map((item, index) => (
						<li>
							<BaseAccordion.AccordionItem title={item.title} />
							<BaseAccordion.AccordionButton
								indexes={openIndexes}
								onClick={onClick}
								index={index}
							/>
							<BaseAccordion.AccordionContent>
								{item.content}
							</BaseAccordion.AccordionContent>
						</li>
					))
				}
			</BaseAccordion>
		)
	}
}

export default Accordion
