import React from 'react'
import PropTypes from 'prop-types'
import AccordionApi from './AccordionApi'

function Accordion(props) {
	return (
		<AccordionApi
			handlerOpenIndex={console.log('Revolution will not be televised')}
			multiSelect
		>
			{props.items.map((item, index) => (
				<AccordionApi.Item key={item.title}>
					<AccordionApi.Button index={index} openClassName={props.openClassName}>
						{item.title}
					</AccordionApi.Button>
					<AccordionApi.Content index={index}>{item.contents}</AccordionApi.Content>
				</AccordionApi.Item>
			))}
		</AccordionApi>
	)
}

Accordion.propTypes = {
	items: PropTypes.array,
	openClassName: PropTypes.string,
}

export default Accordion
