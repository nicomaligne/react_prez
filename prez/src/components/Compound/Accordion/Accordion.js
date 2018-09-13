import React from 'react'
import { BaseAccordionTabs } from '../Core'
import { Item, Button, Content } from './AccordionLibrary'

/*
    Change name to my accordion the real component accordion is the base one
 */
class Accordion extends React.Component {
	static Item = Item

	static Button = props => (
		<BaseAccordionTabs.Consumer>
			{({ onClick, openedIndexes }) => (
				<Button {...props} onClick={onClick} openedIndexes={openedIndexes} />
			)}
		</BaseAccordionTabs.Consumer>
	)

	static Content = props => (
		<BaseAccordionTabs.Consumer>
			{({ openedIndexes }) => (
				<Content {...props} openedIndexes={openedIndexes} />
			)}
		</BaseAccordionTabs.Consumer>
	)

	render() {
		// Add a render default here ?
		return <BaseAccordionTabs>{this.props.children}</BaseAccordionTabs>
	}
}

export default Accordion
