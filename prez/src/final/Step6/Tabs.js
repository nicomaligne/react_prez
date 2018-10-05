import React from 'react'
import PropTypes from 'prop-types'
import ProviderTabsApi from './ProviderTabsApi'

export default function Tabs(props) {
	return (
		<ProviderTabsApi
			handlerOpenIndex={() => console.log('Provider Tabs handlerOpenIndex')}
			preventClosingLastItem
		>
			<ProviderTabsApi.Container>
				{props.items.map((item, index) => (
					<ProviderTabsApi.Button
						key={item.title}
						index={index}
						openClassName={props.openClassName}
					>
						{item.title}
					</ProviderTabsApi.Button>
				))}
			</ProviderTabsApi.Container>
			<ProviderTabsApi.Content>
				{openIndexes => openIndexes[0] >= 0 && props.items[openIndexes[0]].contents}
			</ProviderTabsApi.Content>
		</ProviderTabsApi>
	)
}

Tabs.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
	),
	openClassName: PropTypes.string,
}
