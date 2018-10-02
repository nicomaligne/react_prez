import React from 'react'
import PropTypes from 'prop-types'
import ProviderTabs from './ProviderTabs'

export default function MyTabs(props) {
	return (
		<ProviderTabs
			handlerOpenIndex={() => console.log('Provider Tabs handlerOpenIndex')}
			preventClosingLastItem
		>
			<ProviderTabs.Container>
				{props.items.map((item, index) => (
					<ProviderTabs.Button
						key={item.title}
						className={props.titleClassName}
						index={index}
					>
						{item.title}
					</ProviderTabs.Button>
				))}
			</ProviderTabs.Container>
			<ProviderTabs.Contents items={props.items} />
		</ProviderTabs>
	)
}

MyTabs.propTypes = {
	items: PropTypes.array,
	titleClassName: PropTypes.string,
}
