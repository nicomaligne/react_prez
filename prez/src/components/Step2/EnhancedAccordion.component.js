import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AccordionButton from './AccordionButton.component'
import AccordionContents from './AccordionContents.component'
import AccordionItem from './AccordionItem.component'

const OpenIndicator = styled.span`
	margin-left: 10px;
`

const TabsContainer = styled.div`
	display: flex;
`

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
		if (this.props.tabs) {
			return this.setState(prevState => ({
				...prevState,
				openIndexes: [index],
			}))
		}

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

		if (this.props.tabs) {
			return (
				<div>
					{this.props.tabs && (
						<div>
							<TabsContainer>
								{this.props.items.map((item, index) => (
									<AccordionButton
										key={index}
										className={this.props.titleClassName}
										isOpen={this.state.openIndexes.includes(index)}
										onClick={() => this.handleItemClick(index)}
									>
										{item.title}
										<OpenIndicator>
											{this.state.openIndexes.includes(index) ? '🔽' : '🔼'}
										</OpenIndicator>
									</AccordionButton>
								))}
							</TabsContainer>
							<AccordionContents className={this.props.contentClassName} isOpen>
								{this.props.items[this.state.openIndexes[0]].contents}
							</AccordionContents>
						</div>
					)}
				</div>
			)
		}

		return (
			<div>
				{this.props.items.map((item, index) => (
					<AccordionItem key={item.title} direction={direction}>
						{!after && (
							<AccordionButton
								className={this.props.titleClassName}
								isOpen={this.state.openIndexes.includes(index)}
								onClick={() => this.handleItemClick(index)}
							>
								{item.title}
								<OpenIndicator>
									{this.state.openIndexes.includes(index) ? '🔽' : '🔼'}
								</OpenIndicator>
							</AccordionButton>
						)}

						<AccordionContents
							className={this.props.contentClassName}
							isOpen={this.state.openIndexes.includes(index)}
						>
							{item.contents}
						</AccordionContents>

						{after && (
							<AccordionButton
								className={this.props.titleClassName}
								isOpen={this.state.openIndexes.includes(index)}
								onClick={() => this.handleItemClick(index)}
							>
								{item.title}
								<OpenIndicator>
									{this.state.openIndexes.includes(index) ? '🔽' : '🔼'}
								</OpenIndicator>
							</AccordionButton>
						)}
					</AccordionItem>
				))}
			</div>
		)
	}
}