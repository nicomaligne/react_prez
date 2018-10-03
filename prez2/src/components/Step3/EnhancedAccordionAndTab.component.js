import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import Item from '../Shared/Item.component'

const TabsContainer = styled.div`
	display: flex;
`
const preventClose = (openIndexes, index, preventClosingLastItem) => {
	if (preventClosingLastItem && openIndexes.length === 1) {
		return openIndexes
	}
	return openIndexes.filter(i => i !== index)
}

const setOpenIndexes = (index, preventClosingLastItem) => state => ({
	...state,
	openIndexes: state.openIndexes.includes(index)
		? preventClose(state.openIndexes, index, preventClosingLastItem)
		: [index],
})

const setMultiOpenIndexes = (index, preventClosingLastItem) => state => ({
	openIndexes: state.openIndexes.includes(index)
		? preventClose(state.openIndexes, index, preventClosingLastItem)
		: [...state.openIndexes, index],
})

export class EnhancedAccordionAndTab extends React.Component {
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
		tabs: PropTypes.bool,
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
		if (this.props.multiSelect) {
			return this.setState(
				setMultiOpenIndexes(index, this.props.preventClosingLastItem),
				this.props.handlerOpenIndex,
			)
		}
		return this.setState(
			setOpenIndexes(index, this.props.preventClosingLastItem),
			this.props.handlerOpenIndex,
		)
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

		if (this.props.tabs) {
			return (
				<div>
					{this.props.tabs && (
						<div>
							<TabsContainer>
								{this.props.items.map((item, index) => (
									<Button
										key={index}
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
								))}
							</TabsContainer>
							<Content isOpen>
								{this.props.items[this.state.openIndexes[0]].contents}
							</Content>
						</div>
					)}
				</div>
			)
		}

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
