import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import OpenIndexManager from './OpenIndexManager'

const TabsContainer = styled.div`
	display: flex;
`

export default class RenderPropsTabs extends React.Component {
	static propTypes = {
		contentClassName: PropTypes.string,
		openClassName: PropTypes.string,
		items: PropTypes.array,
		titleClassName: PropTypes.string,
	}

	render() {
		return (
			<OpenIndexManager
				handlerOpenIndex={() => console.log('RenderPropsTabs handlerOpenIndex')}
				preventClosingLastItem
			>
				{({ openIndexes, handleItemClick }) => (
					<React.Fragment>
						<TabsContainer>
							{this.props.items.map((item, index) => (
								<AccordionButton
									key={index}
									className={
										openIndexes.includes(index)
											? this.props.openClassName
											: null
									}
									isOpen={openIndexes.includes(index)}
									onClick={() => handleItemClick(index)}
								>
									{item.title}
								</AccordionButton>
							))}
						</TabsContainer>
						<AccordionContents isOpen={openIndexes[0] >= 0}>
							{openIndexes[0] >= 0 && this.props.items[openIndexes[0]].contents}
						</AccordionContents>
					</React.Fragment>
				)}
			</OpenIndexManager>
		)
	}
}
