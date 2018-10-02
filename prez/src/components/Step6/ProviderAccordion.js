import React from 'react'
import PropTypes from 'prop-types'
import OpenIndexManager from './OpenIndexManager'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class CompoundAccordion extends React.Component {
	static propTypes = {}

	static Button = props => (
		<OpenIndexManager.Consumer>
			{({ openIndexes, handleItemClick }) => (
				<AccordionButton
					isOpen={openIndexes.includes(props.index)}
					onClick={() => handleItemClick(props.index)}
					{...props}
				/>
			)}
		</OpenIndexManager.Consumer>
	)

	static Contents = props => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => (
				<AccordionContents isOpen={openIndexes.includes(props.index)} {...props} />
			)}
		</OpenIndexManager.Consumer>
	)

	static Item = props => <AccordionItem {...props} direction="vertical" />

	render() {
		return <OpenIndexManager {...this.props}>{this.props.children}</OpenIndexManager>
	}
}
