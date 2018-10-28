import React from 'react'
import classNames from 'classnames'
import OpenIndexManager from './OpenIndexManager'
import Button from '../../Shared/Button.component'
import Content from '../../Shared/Content.component'
import Item from '../../Shared/Item.component'

export default class ProviderAccordionApi extends React.Component {
	/*
		This is how we can use our Consumer. We add it to our compound components,
		it will avoid some boiler plate code, and ensure that we are only exposing what we want,
		for every component.
	*/
	static Button = ({ index, openClassName, ...props }) => (
		<OpenIndexManager.Consumer>
			{({ openIndexes, handleItemClick }) => (
				<Button
					className={classNames(openIndexes.includes(index) ? openClassName : null)}
					isOpen={openIndexes.includes(index)}
					onClick={() => handleItemClick(index)}
					{...props}
				/>
			)}
		</OpenIndexManager.Consumer>
	)

	static Content = ({ index, ...props }) => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => <Content isOpen={openIndexes.includes(index)} {...props} />}
		</OpenIndexManager.Consumer>
	)

	static Item = props => <Item {...props} direction="vertical" />

	render() {
		return this.props.children
		// return <OpenIndexManager {...this.props} />
	}
}
