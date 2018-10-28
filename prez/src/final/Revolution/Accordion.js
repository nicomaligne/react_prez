import React from 'react'
import AccordionApi from './AccordionApi'

function Accordion(props) {
	return (
		<AccordionApi
			handlerOpenIndex={console.log('Provider Accordion handlerOpenIndex')}
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

export default Accordion
