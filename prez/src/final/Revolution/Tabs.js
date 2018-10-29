import React from 'react'
import PropTypes from 'prop-types'
import TabsApi from './TabsApi'

export default function Tabs(props) {
	return (
		<TabsApi
			handlerOpenIndex={() => console.log('Tabs handlerOpenIndex')}
			preventClosingLastItem
		>
			<TabsApi.Container>
				{props.items.map((item, index) => (
					<TabsApi.Button
						key={item.title}
						index={index}
						openClassName={props.openClassName}
					>
						{item.title}
					</TabsApi.Button>
				))}
			</TabsApi.Container>
			<TabsApi.Content>
				{openIndexes => openIndexes[0] >= 0 && props.items[openIndexes[0]].contents}
			</TabsApi.Content>
		</TabsApi>
	)
}

Tabs.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
	),
	openClassName: PropTypes.string,
}
