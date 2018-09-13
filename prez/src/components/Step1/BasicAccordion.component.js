import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AccordionButton from './AccordionButton.component'
import AccordionContents from './AccordionContents.component'
import AccordionItem from './AccordionItem.component'

const OpenIndicator = styled.span`
	margin-left: 10px;
`

export class BasicAccordion extends React.Component {
	static propTypes = {
		openIndexes: PropTypes.array,
		items: PropTypes.array,
	}

	constructor(props) {
		super(props)
		this.state = {
			openIndexes: [0],
		}
	}

	getState = (state = this.state) => ({
		openIndexes:
			this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes,
	})

	handleItemClick = index => {
		this.setState(prevState => ({
			openIndexes: prevState.openIndexes.includes(index)
				? prevState.openIndexes.filter(i => i !== index)
				: [...prevState.openIndexes, index],
		}))
	}

	render() {
		return (
			<div>
				{this.props.items.map((item, index) => (
					<AccordionItem key={item.title} direction="vertical">
						<AccordionButton
							isOpen={this.state.openIndexes.includes(index)}
							onClick={() => this.handleItemClick(index)}
						>
							{item.title}
							<OpenIndicator>
								{this.state.openIndexes.includes(index) ? '🔽' : '🔼'}
							</OpenIndicator>
						</AccordionButton>
						<AccordionContents isOpen={this.state.openIndexes.includes(index)}>
							{item.contents}
						</AccordionContents>
					</AccordionItem>
				))}
			</div>
		)
	}
}
