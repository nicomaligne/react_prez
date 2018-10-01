import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import classNames from 'classnames'
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

	static Button = props => <AccordionButton {...props} />

	static Contents = props => <AccordionContents {...props} className />

	render() {
		return (
			<OpenIndexManager>
				{({ handleItemClick, openIndexes }) =>
					this.props.children({ handleItemClick, openIndexes }) //eslint-disable-line
				}
			</OpenIndexManager>
		)
	}
}
