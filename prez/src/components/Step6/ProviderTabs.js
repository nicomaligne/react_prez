import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import OpenIndexManager from './OpenIndexManager'

export default class CompoundTabs extends React.Component {
	static propTypes = {
		children: PropTypes.array,
	}

	static Container = styled.div`
		display: flex;
	`

	static Button = props => (
		<OpenIndexManager.Consumer>
			{({ handleItemClick, openIndexes }) => (
				<AccordionButton
					{...props}
					isOpen={openIndexes.includes(props.index)}
					onClick={() => handleItemClick(props.index)}
				/>
			)}
		</OpenIndexManager.Consumer>
	)

	static Contents = props => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => (
				<AccordionContents
					className={classNames(props.contentClassName, props.openClassName)}
					isOpen={openIndexes[0] >= 0}
					{...props}
				>
					{openIndexes[0] >= 0 && props.items[openIndexes[0]].contents}
				</AccordionContents>
			)}
		</OpenIndexManager.Consumer>
	)

	render() {
		return <OpenIndexManager {...this.props}>{this.props.children}</OpenIndexManager>
	}
}
