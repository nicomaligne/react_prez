import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OpenIndexManager from './OpenIndexManager'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class CompoundAccordion extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	static Button = props => (
		<AccordionButton
			isOpen={props.openIndexes.includes(props.index)}
			onClick={() => props.handleItemClick(props.index)}
			{...props}
		/>
	)

	static Contents = props => (
		<AccordionContents isOpen={props.openIndexes.includes(props.index)} {...props} />
	)

	static Item = props => <AccordionItem {...props} />

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error(
				'CompoundAccordion: this.props.children is not a function, this component implements children as function',
			)
		}
		return (
			<OpenIndexManager {...this.props}>
				{({ handleItemClick, openIndexes }) =>
					this.props.children({ handleItemClick, openIndexes })
				}
			</OpenIndexManager>
		)
	}
}
