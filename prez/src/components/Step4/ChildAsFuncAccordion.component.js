import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import ChildAsFuncBase from './ChildAsFuncBase.component'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export default class ChildAsFuncAccordion extends React.Component {
	static propTypes = {
		items: PropTypes.array,
		position: PropTypes.string,
		titleClassName: PropTypes.string,
		contentClassName: PropTypes.string,
		closeClassName: PropTypes.string,
		openClassName: PropTypes.string,
	}

	render() {
		const direction =
			this.props.position === 'above' || this.props.position === 'beside'
				? 'vertical'
				: 'horizontal'
		const openClassName = classNames(this.props.contentClassName, this.props.openClassName)
		const closeClassName = classNames(this.props.contentClassName, this.props.closeClassName)
		return (
			<ChildAsFuncBase>
				{({ handleItemClick, openIndexes }) =>
					this.props.items.map(( //eslint-disable-line
						item,
						index,
					) => (
						<AccordionItem key={item.title} direction={direction}>
							<AccordionButton
								className={this.props.titleClassName}
								isOpen={openIndexes.includes(index)}
								onClick={() => handleItemClick(index)}
							>
								{item.title}
							</AccordionButton>
							<AccordionContents
								className={
									openIndexes.includes(index) ? openClassName : closeClassName
								}
								isOpen={openIndexes.includes(index)}
							>
								{item.contents}
							</AccordionContents>
						</AccordionItem>
					))
				}
			</ChildAsFuncBase>
		)
	}
}
