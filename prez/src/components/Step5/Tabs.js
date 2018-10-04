import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CompoundTabsApi from './CompoundTabsApi'

export default function Tabs(props) {
	return (
		<CompoundTabsApi
			handlerOpenIndex={() => console.log('Compound Tabs handlerOpenIndex')}
			preventClosingLastItem
		>
			{({ openIndexes, handleItemClick }) => (
				<React.Fragment>
					<CompoundTabsApi.Container>
						{props.items.map((item, index) => (
							<CompoundTabsApi.Button
								handleItemClick={handleItemClick}
								index={index}
								key={item.title}
								openIndexes={openIndexes}
								openClassName={props.openClassName}
							>
								{item.title}
							</CompoundTabsApi.Button>
						))}
					</CompoundTabsApi.Container>
					<CompoundTabsApi.Content openIndexes={openIndexes}>
						{openIndexes[0] >= 0 && props.items[openIndexes[0]].contents}
					</CompoundTabsApi.Content>
				</React.Fragment>
			)}
		</CompoundTabsApi>
	)
}

MyTabs.propTypes = {
	items: PropTypes.array,
	titleClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	openClassName: PropTypes.string,
}
