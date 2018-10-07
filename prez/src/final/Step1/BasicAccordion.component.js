import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Shared/Button.component'
import Content from '../../Shared/Content.component'
import Item from '../../Shared/Item.component'

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
					<Item key={index}>
						<Button
							isOpen={this.state.openIndexes.includes(index)}
							onClick={() => this.handleItemClick(index)}
						>
							{item.title}
						</Button>
						<Content isOpen={this.state.openIndexes.includes(index)}>
							{item.contents}
						</Content>
					</Item>
				))}
			</div>
		)
	}
}
