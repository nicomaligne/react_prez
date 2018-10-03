import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import OpenIndexManager from './OpenIndexManager'

export default class CompoundTabs extends React.Component {
	static propTypes = {
		children: PropTypes.array,
	}

	static Container = styled.div`
		display: flex;
	`

	static Button = ({ index, openClassName, ...props }) => (
		<OpenIndexManager.Consumer>
			{({ handleItemClick, openIndexes }) => (
				<Button
					className={classNames(openIndexes.includes(index) ? openClassName : null)}
					isOpen={openIndexes.includes(index)}
					onClick={() => handleItemClick(index)}
					{...props}
				/>
			)}
		</OpenIndexManager.Consumer>
	)

	static Content = ({ children, ...props }) => (
		<OpenIndexManager.Consumer>
			{({ openIndexes }) => (
				<Content isOpen={openIndexes[0] >= 0} {...props}>
					{typeof children === 'function' ? children(openIndexes) : children}
				</Content>
			)}
		</OpenIndexManager.Consumer>
	)

	render() {
		return <OpenIndexManager {...this.props} />
	}
}
