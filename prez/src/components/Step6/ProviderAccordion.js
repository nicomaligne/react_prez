import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OpenIndexManager from './OpenIndexManager'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class CompoundAccordion extends React.Component {

	static Button = ({ index, openClassName, ...props }) => (
		<OpenIndexManager.Consumer>
			{({ openIndexes, handleItemClick }) => (
				<AccordionButton
					className={classNames(openIndexes.includes(index) ? openClassName : null)}
					isOpen={openIndexes.includes(index)}
					onClick={() => handleItemClick(index)}
					{...props}
				/>
			)}
		</OpenIndexManager.Consumer>
	)

	static Contents = ({ index, ...props}) => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => (
				<AccordionContents isOpen={openIndexes.includes(index)} {...props} />
			)}
		</OpenIndexManager.Consumer>
	)

	static Item = props => <AccordionItem {...props} direction="vertical" />

	render() {
		return <OpenIndexManager {...this.props}/>
	}
}
