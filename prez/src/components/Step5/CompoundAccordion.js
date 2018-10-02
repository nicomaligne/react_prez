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

	static Button = ({ openIndexes, handleItemClick, openClassName, index, ...rest }) => (
		<AccordionButton
			className={classNames(openIndexes.includes(index) ? openClassName : null)}
			isOpen={openIndexes.includes(index)}
			onClick={() => handleItemClick(index)}
			{...rest}
		/>
	)

	static Contents = props => (
		<AccordionContents isOpen={props.openIndexes.includes(props.index)} {...props} />
	)

	static Item = props => <AccordionItem {...props} />

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error(
				'ProviderAccordion: this.props.children is not a function, this component implements children as function',
			)
		}
		return (
			<OpenIndexManager
				handlerOpenIndex={console.log('Provider accordion handlerOpenIndex')}
				multiSelect
				{...this.props}
			>
				{({ handleItemClick, openIndexes }) =>
					this.props.children({ handleItemClick, openIndexes })
				}
			</OpenIndexManager>
		)
	}
}
