import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import Item from '../Shared/Item.component'

export class EnhancedAccordion extends React.Component {
	static propTypes = {
		openIndexes: PropTypes.array,
		items: PropTypes.array,
		position: PropTypes.string,
		single: PropTypes.bool,
		preventClose: PropTypes.bool,
		titleClassName: PropTypes.string,
		contentClassName: PropTypes.string,
		closeClassName: PropTypes.string,
		openClassName: PropTypes.string,
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
		if (this.props.preventClose) {
			if (!this.state.openIndexes.includes(index)) {
				return this.setState(prevState => ({
					...prevState,
					openIndexes: prevState.openIndexes.concat([index]),
				}))
			}
			return this.state
		}
		if (this.props.single) {
			if (this.state.openIndexes.includes(index)) {
				return this.setState(prevState => ({
					...prevState,
					openIndexes: [],
				}))
			}
			return this.setState(prevState => ({
				...prevState,
				openIndexes: [index],
			}))
		}
		return this.setState(prevState => ({
			openIndexes: prevState.openIndexes.includes(index)
				? prevState.openIndexes.filter(i => i !== index)
				: [...prevState.openIndexes, index],
		}))
	}

	render() {
		const direction =
			this.props.position === 'above' || this.props.position === 'beside'
				? 'vertical'
				: 'horizontal'
		const after = this.props.position === 'right' || this.props.position === 'beside'
		const openClassName = classNames(
			this.props.titleClassName,
			this.props.contentClassName,
			this.props.openClassName,
		)
		const closeClassName = classNames(
			this.props.titleClassName,
			this.props.contentClassName,
			this.props.closeClassName,
		)

		return (
			<div>
				{this.props.items.map((item, index) => (
					<Item key={item.title} direction={direction}>
						{!after && (
							<Button
								className={
									this.state.openIndexes.includes(index)
										? openClassName
										: closeClassName
								}
								isOpen={this.state.openIndexes.includes(index)}
								onClick={() => this.handleItemClick(index)}
							>
								{item.title}
							</Button>
						)}
						<Content isOpen={this.state.openIndexes.includes(index)}>
							{item.contents}
						</Content>

						{after && (
							<Button
								className={
									this.state.openIndexes.includes(index)
										? openClassName
										: closeClassName
								}
								isOpen={this.state.openIndexes.includes(index)}
								onClick={() => this.handleItemClick(index)}
							>
								{item.title}
							</Button>
						)}
					</Item>
				))}
			</div>
		)
	}
}
