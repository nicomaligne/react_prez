import React from 'react'
import PropTypes from 'prop-types'
import CompoundAccordion from './CompoundAccordion'

export default function MyAccordion(props) {
	return (
		<CompoundAccordion>
			{({ handleItemClick, openIndexes }) =>
				props.items.map(( //eslint-disable-line
					item,
					index,
				) => (
					<CompoundAccordion.Item key={item.title}>
						<CompoundAccordion.Button
							className={props.titleClassName}
							isOpen={openIndexes.includes(index)}
							onClick={() => handleItemClick(index)}
						>
							{item.title}
						</CompoundAccordion.Button>
						<CompoundAccordion.Contents
							className={openIndexes.includes(index)}
							isOpen={openIndexes.includes(index)}
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
