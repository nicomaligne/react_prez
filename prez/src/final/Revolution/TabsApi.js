import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import Button from '../../Shared/Button.component'
import Content from '../../Shared/Content.component'
import { useOpenIndexes } from './OpenIndexes'

const TabsContext = React.createContext()

const getTabsContext = () => {
	const context = React.useContext(TabsContext)
	if (!context) {
		throw new Error('Component must be rendered inside the tabs api')
	}
	return context
}

const TabsApi = props => {
	const [openIndexes, onIndexChange] = useOpenIndexes([0])
	function onClick(index) {
		onIndexChange(index, props.multiSelect, props.preventClosingLastItem)
		if (props.handlerOpenIndex) {
			props.handlerOpenIndex()
		}
	}
	return (
		<TabsContext.Provider value={{ openIndexes, onClick }}>
			{props.children}
		</TabsContext.Provider>
	)
}

TabsApi.propTypes = {
	children: PropTypes.array,
	handlerOpenIndex: PropTypes.func,
	multiSelect: PropTypes.bool,
	preventClosingLastItem: PropTypes.bool,
}

TabsApi.Container = styled.div`
	display: flex;
`

TabsApi.Button = ({ index, openClassName, ...props }) => {
	const { openIndexes, onClick } = getTabsContext()
	return (
		<Button
			className={classNames(openIndexes.includes(index) ? openClassName : null)}
			isOpen={openIndexes.includes(index)}
			onClick={() => onClick(index)}
			{...props}
		/>
	)
}
TabsApi.Content = ({ children, ...props }) => {
	const { openIndexes } = getTabsContext()
	return (
		<Content isOpen={openIndexes[0] >= 0} {...props}>
			{typeof children === 'function' ? children(openIndexes) : children}
		</Content>
	)
}

export default TabsApi
