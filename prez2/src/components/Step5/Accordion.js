import React from 'react'
import PropTypes from 'prop-types'
import CompoundAccordionApi from './CompoundAccordionApi'

export default function Accordion(props) {
	return (
		<CompoundAccordionApi
			handlerOpenIndex={console.log('Custom accordion handlerOpenIndex')}
			multiSelect
		>
			{({ handleItemClick, openIndexes }) =>
				props.items.map((item, index) => (
					<CompoundAccordionApi.Item key={item.title}>
						<CompoundAccordionApi.Button
							openClassName={props.openClassName}
							openIndexes={openIndexes}
							handleItemClick={handleItemClick}
							index={index}
						>
							{item.title}
						</CompoundAccordionApi.Button>
						<CompoundAccordionApi.Content
							openIndexes={openIndexes}
							index={index}
						>
							{item.contents}
						</CompoundAccordionApi.Content>
					</CompoundAccordionApi.Item>
				))
			}
		</CompoundAccordionApi>
	)
}

Accordion.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
	),
	openClassName: PropTypes.string,
}
