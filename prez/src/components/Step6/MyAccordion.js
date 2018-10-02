import React from 'react'
import PropTypes from 'prop-types'
import ProviderAccordion from './ProviderAccordion'

export default function MyAccordion(props) {
	return (
		<ProviderAccordion
			handlerOpenIndex={console.log('Provider Accordion handlerOpenIndex')}
			multiSelect
		>
			{props.items.map((item, index) => (
				<ProviderAccordion.Item key={item.title}>
					<ProviderAccordion.Button index={index} openClassName={props.openClassName}>
						{item.title}
					</ProviderAccordion.Button>
					<ProviderAccordion.Contents index={index}>
						{item.contents}
					</ProviderAccordion.Contents>
				</ProviderAccordion.Item>
			))}
		</ProviderAccordion>
	)
}

MyAccordion.propTypes = {
	titleClassName: PropTypes.string,
	items: PropTypes.array,
}
