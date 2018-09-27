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
				{this.props.children}
			</OpenIndexManager>
		)
	}
}
