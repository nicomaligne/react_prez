import React from 'react'
import PropTypes from 'prop-types'
import ProviderAccordionApi from './ProviderAccordionApi'

export default function Accordion(props) {
	return (
		<ProviderAccordionApi
			handlerOpenIndex={console.log('Provider Accordion handlerOpenIndex')}
			multiSelect
		>
			{props.items.map((item, index) => (
				<ProviderAccordionApi.Item key={item.title}>
					<ProviderAccordionApi.Button index={index} openClassName={props.openClassName}>
						{item.title}
					</ProviderAccordionApi.Button>
					<ProviderAccordionApi.Content index={index}>
						{item.contents}
					</ProviderAccordionApi.Content>
				</ProviderAccordionApi.Item>
			))}
		</ProviderAccordionApi>
	)
}

Accordion.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
	),
	openClassName: PropTypes.string,
}
