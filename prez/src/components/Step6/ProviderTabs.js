import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import OpenIndexManager from './OpenIndexManager'

export default class CompoundTabs extends React.Component {
	static propTypes = {
		contentClassName: PropTypes.string,
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
			<AccordionContents {...props}>TOTO</AccordionContents>
		</OpenIndexManager.Consumer>
	)

	render() {
		return <OpenIndexManager>{this.props.children}</OpenIndexManager>
	}
}
