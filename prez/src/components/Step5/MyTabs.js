import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CompoundTabs from './CompoundTabs'

export default function MyTabs(props) {
	return (
		<CompoundTabs
			handlerOpenIndex={() => console.log('Compound Tabs handlerOpenIndex')}
			preventClosingLastItem
		>
			{({ openIndexes, handleItemClick }) => (
				<React.Fragment>
					<CompoundTabs.Container>
						{props.items.map((item, index) => (
							<CompoundTabs.Button
								handleItemClick={handleItemClick}
								index={index}
								key={item.title}
								openIndexes={openIndexes}
								openClassName={props.openClassName}
							>
								{item.title}
							</CompoundTabs.Button>
						))}
					</CompoundTabs.Container>
					<CompoundTabs.Contents openIndexes={openIndexes}>
						{openIndexes[0] >= 0 && props.items[openIndexes[0]].contents}
					</CompoundTabs.Contents>
				</React.Fragment>
			)}
		</CompoundTabs>
	)
}

MyTabs.propTypes = {
	items: PropTypes.array,
	titleClassName: PropTypes.string,
	contentClassName: PropTypes.string,
	openClassName: PropTypes.string,
}
