import React from 'react'
import PropTypes from 'prop-types'
import AccordionButton from '../Shared/AccordionButton.component'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

export class BasicAccordion extends React.Component {
	static propTypes = {
		openIndexes: PropTypes.array,
		items: PropTypes.array,
	}

	state = {
		openIndexes: [0],
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
					<AccordionItem key={index}>
						<AccordionButton
							isOpen={this.state.openIndexes.includes(index)}
							onClick={() => this.handleItemClick(index)}
						>
							{item.title}
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
