import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OpenIndexManager from './OpenIndexManager'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import Item from '../Shared/Item.component'

export default class CompoundAccordion extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	static Button = props => (
		<Button
			isOpen={props.openIndexes.includes(props.index)}
			onClick={() => props.handleItemClick(props.index)}
			{...props}
		/>
	)

	static Contents = props => (
		<Content isOpen={props.openIndexes.includes(props.index)} {...props} />
	)

	static Item = props => <Item {...props} />

	render() {
		if (typeof this.props.children !== 'function') {
			throw new Error(
				'ProviderAccordion: this.props.children is not a function, this component implements children as function',
			)
		}
		return (
			<OpenIndexManager
				handlerOpenIndex={console.log('Provider accordion handlerOpenIndex')}
				multiSelect
				{...this.props}
			>
				{({ handleItemClick, openIndexes }) =>
					this.props.children({ handleItemClick, openIndexes })
				}
			</OpenIndexManager>
		)
	}
}
