import React from 'react'
import PropTypes from 'prop-types'
import OpenIndexManager from './OpenIndexManager'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class CompoundAccordion extends React.Component {
	static propTypes = {
		items: PropTypes.array,
		position: PropTypes.string,
		titleClassName: PropTypes.string,
		contentClassName: PropTypes.string,
		closeClassName: PropTypes.string,
		openClassName: PropTypes.string,
	}

	static Button = props => <AccordionButton {...props} />

	static Contents = props => <AccordionContents {...props} />

	static Item = props => (
		<AccordionItem
			{...props}
			direction={
				props.position === 'above' || props.position === 'beside'
					? 'vertical'
					: 'horizontal'
			}
		/>
	)

	render() {
		return (
			<OpenIndexManager>
				{({ handleItemClick, openIndexes }) =>
					this.props.children({ handleItemClick, openIndexes }) //eslint-disable-line
				}
			</OpenIndexManager>
		)
	}
}
