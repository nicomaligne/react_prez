import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import Button from '../../Shared/Button.component'
import Content from '../../Shared/Content.component'
import Item from '../../Shared/Item.component'
import { useOpenIndexes } from './OpenIndexes'

const AccordionContext = React.createContext()

const getAccordionContext = () => {
	const context = useContext(AccordionContext)
	if (!context) {
		throw new Error('Component must be rendered inside the accordion api')
	}
	return context
}

const AccordionApi = props => {
	const [openIndexes, onIndexChange] = useOpenIndexes(0)
	function onClick(index) {
		onIndexChange(index)
	}
	return (
		<AccordionContext.Provider value={{ openIndexes, onClick }}>
			{props.children}
		</AccordionContext.Provider>
	)
}

AccordionApi.Content = props => {
	const { openIndexes } = getAccordionContext()
	return <Content isOpen={openIndexes.includes(props.index)} {...props} />
}

AccordionApi.Button = props => {
	const { openIndexes, onClick } = getAccordionContext()
	return (
		<Button
			className={classNames(openIndexes.includes(props.index) ? props.openClassName : null)}
			isOpen={openIndexes.includes(props.index)}
			onClick={() => onClick(props.index)}
			{...props}
		/>
	)
}

AccordionApi.Item = props => <Item {...props} direction="vertical" />

export default AccordionApi
