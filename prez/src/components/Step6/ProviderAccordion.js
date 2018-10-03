import React from 'react'
import PropTypes from 'prop-types'
import OpenIndexManager from './OpenIndexManager'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import Item from '../Shared/Item.component'

export default class CompoundAccordion extends React.Component {
	static propTypes = {}

	static Button = props => (
		<OpenIndexManager.Consumer>
			{({ openIndexes, handleItemClick }) => (
				<Button
					isOpen={openIndexes.includes(props.index)}
					onClick={() => handleItemClick(props.index)}
					{...props}
				/>
			)}
		</OpenIndexManager.Consumer>
	)

	static Contents = props => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => <Content isOpen={openIndexes.includes(props.index)} {...props} />}
		</OpenIndexManager.Consumer>
	)

	static Item = props => <Item {...props} direction="vertical" />

	render() {
		return <OpenIndexManager {...this.props}>{this.props.children}</OpenIndexManager>
	}
}
