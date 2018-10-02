import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import OpenIndexManager from './OpenIndexManager'

export default class CompoundTabs extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	static Container = styled.div`
		display: flex;
	`
	static Button = ({ openIndexes, handleItemClick, index, ...rest }) => (
		<AccordionButton
			isOpen={openIndexes.includes(index)}
			onClick={() => handleItemClick(index)}
			{...rest}
		/>
	)

	static Contents = ({ openIndexes, items, ...rest }) => (
		<AccordionContents isOpen={openIndexes[0] >= 0} {...rest}>
			{openIndexes[0] >= 0 && items[openIndexes[0]].contents}
		</AccordionContents>
	)

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error(
				'CompoundTabs: this.props.children is not a function, this component implements children as function',
			)
		}
		return (
			<OpenIndexManager {...this.props}>
				{({ handleItemClick, openIndexes }) =>
					this.props.children({ handleItemClick, openIndexes })
				}
			</OpenIndexManager>
		)
	}
}
