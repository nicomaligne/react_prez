import React from 'react'
import PropTypes from 'prop-types'
import ProviderAccordion from './ProviderAccordion'

export default function MyAccordion(props) {
	return (
		<ProviderAccordion>
			{props.items.map((
				item,
				index,
			) => (
				<ProviderAccordion.Item key={item.title}>
					<ProviderAccordion.Button
						className={props.titleClassName}
						index={index}
					>
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
