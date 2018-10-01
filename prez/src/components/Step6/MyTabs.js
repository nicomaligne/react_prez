import React from 'react'
import PropTypes from 'prop-types'
import ProviderTabs from './ProviderTabs'

export default function MyTabs(props) {
	return (
		<ProviderTabs>
			<ProviderTabs.Container>
				{props.items.map((item, index) => (
					<ProviderTabs.Button key={index} className={props.titleClassName} index={index}>
						{item.title}
					</ProviderTabs.Button>
				))}
			</ProviderTabs.Container>
			<ProviderTabs.Contents />
		</ProviderTabs>
	)
}

MyTabs.propTypes = {
	items: PropTypes.array,
	titleClassName: PropTypes.string,
}
