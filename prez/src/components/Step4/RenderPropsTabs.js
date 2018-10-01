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
	render() {
		const openClassName = classNames(this.props.contentClassName, this.props.openClassName)
		return (
			<OpenIndexManager>
				{({ openIndexes, handleItemClick }) => (
					<React.Fragment>
						<TabsContainer>
							{this.props.items.map((item, index) => (
								<AccordionButton
									key={index}
									className={this.props.titleClassName}
									isOpen={openIndexes.includes(index)}
									onClick={() => handleItemClick(index)}
								>
									{item.title}
								</AccordionButton>
							))}
						</TabsContainer>
						<AccordionContents className={openClassName} isOpen>
							{this.props.items[openIndexes[0]].contents}
						</AccordionContents>
					</React.Fragment>
				)}
			</OpenIndexManager>
		)
	}
}
