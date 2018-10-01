import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CompoundTabs from './CompoundTabs'

export default function MyTabs(props) {
	return (
		<CompoundTabs>
			{({ openIndexes, handleItemClick }) => (
				<React.Fragment>
					<CompoundTabs.Container>
						{props.items.map((item, index) => (
							<CompoundTabs.Button
								key={index}
								className={props.titleClassName}
								isOpen={openIndexes.includes(index)}
								onClick={() => handleItemClick(index)}
							>
								{item.title}
							</CompoundTabs.Button>
						))}
					</CompoundTabs.Container>
					<CompoundTabs.Contents
						className={classNames(props.contentClassName, props.openClassName)}
						isOpen
					>
						{props.items[openIndexes[0]].contents}
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
