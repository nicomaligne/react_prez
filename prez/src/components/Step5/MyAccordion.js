import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CompoundAccordion from './CompoundAccordion'

export default function MyAccordion(props) {
	return (
		<CompoundAccordion
			handlerOpenIndex={console.log('Custom accordion handlerOpenIndex')}
			multiSelect
		>
			{({ handleItemClick, openIndexes }) =>
				props.items.map((item, index) => (
					<CompoundAccordion.Item key={item.title}>
						<CompoundAccordion.Button
							className={props.titleClassName}
							openIndexes={openIndexes}
							handleItemClick={handleItemClick}
							index={index}
						>
							{item.title}
						</CompoundAccordion.Button>
						<CompoundAccordion.Contents
							className={classNames(props.contentClassName, props.openClassName)}
							openIndexes={openIndexes}
							index={index}
						>
							{item.contents}
						</CompoundAccordion.Contents>
					</CompoundAccordion.Item>
				))
			}
		</CompoundAccordion>
	)
}

MyAccordion.propTypes = {
	titleClassName: PropTypes.string,
	items: PropTypes.array,
}
