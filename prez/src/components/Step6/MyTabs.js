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
						index={index}
						openClassName={props.openClassName}
					>
						{item.title}
					</ProviderTabs.Button>
				))}
			</ProviderTabs.Container>
			<ProviderTabs.Contents>
					{openIndexes => openIndexes[0] >= 0 && props.items[openIndexes[0]].contents}
			</ProviderTabs.Contents>
		</ProviderTabs>
	)
}

MyTabs.propTypes = {
	items: PropTypes.array,
	titleClassName: PropTypes.string,
}
