import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import OpenIndexManager from './OpenIndexManager'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class RenderPropsAccordion extends React.Component {
	static propTypes = {
		closeClassName: PropTypes.string,
		contentClassName: PropTypes.string,
		items: PropTypes.arrayOf(
			PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
		),
		openClassName: PropTypes.string,
		titleClassName: PropTypes.string,
	}

	render() {
		return (
			<OpenIndexManager
				handlerOpenIndex={() => console.log('RenderPropsAccordion handlerOpenIndex')}
				multiSelect
			>
				{({ handleItemClick, openIndexes }) =>
					this.props.items.map((item, index) => (
						<AccordionItem key={item.title} direction="horizontal">
							<AccordionButton
								className={this.props.titleClassName}
								isOpen={openIndexes.includes(index)}
								onClick={() => handleItemClick(index)}
							>
								{item.title}
							</AccordionButton>
							<AccordionContents
								className={classNames(
									this.props.contentClassName,
									openIndexes.includes(index)
										? this.props.openClassName
										: this.props.closeClassName,
								)}
								isOpen={openIndexes.includes(index)}
							>
								{item.contents}
							</AccordionContents>
						</AccordionItem>
					))
				}
			</OpenIndexManager>
		)
	}
}
