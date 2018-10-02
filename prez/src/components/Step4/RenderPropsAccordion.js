import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import OpenIndexManager from './OpenIndexManager'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class RenderPropsAccordion extends React.Component {
	static propTypes = {
		items: PropTypes.arrayOf(
			PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
		),
		openClassName: PropTypes.string,
		closeClassName: PropTypes.string,
	}

	render() {
		console.log('this.props', this.props)
		return (
			<OpenIndexManager
				handlerOpenIndex={() => console.log('RenderPropsAccordion handlerOpenIndex')}
				multiSelect
			>
				{({ handleItemClick, openIndexes }) =>
					this.props.items.map((item, index) => (
						<AccordionItem key={item.title} direction="horizontal">
							<AccordionButton
								className={classNames(
									openIndexes.includes(index)
										? this.props.openClassName
										: null,	
								)}
								isOpen={openIndexes.includes(index)}
								onClick={() => handleItemClick(index)}
							>
								{item.title}
							</AccordionButton>
							<AccordionContents isOpen={openIndexes.includes(index)}>
								{item.contents}
							</AccordionContents>
						</AccordionItem>
					))
				}
			</OpenIndexManager>
		)
	}
}
