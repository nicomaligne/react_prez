import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
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
	static Button = ({ openIndexes, handleItemClick, index, openClassName, ...rest }) => (
		<AccordionButton
			isOpen={openIndexes.includes(index)}
			className={classNames(openIndexes.includes(index) ? openClassName : null)}
			onClick={() => handleItemClick(index)}
			{...rest}
		/>
	)

	static Contents = ({ openIndexes, items, ...rest }) => (
		<AccordionContents isOpen={openIndexes[0] >= 0} {...rest} />
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
