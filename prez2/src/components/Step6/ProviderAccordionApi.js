import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OpenIndexManager from './OpenIndexManager'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import Item from '../Shared/Item.component'

export default class CompoundAccordionApi extends React.Component {

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

	static Content = ({ index, ...props}) => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => (
				<Content isOpen={openIndexes.includes(index)} {...props} />
			)}
		</OpenIndexManager.Consumer>
	)

	static Item = props => <Item {...props} direction="vertical" />

	render() {
		return <OpenIndexManager {...this.props}/>
	}
}
