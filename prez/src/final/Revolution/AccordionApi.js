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
	const [activeIndex, setActiveIndex] = useState(0)
	// useEffect(() => props.handlerOpenIndex)
	const openIndexes = useOpenIndexes(activeIndex, props.multiSelect, props.preventClosingLastItem)
	return (
		<AccordionContext.Provider value={{ openIndexes, setActiveIndex }}>
			{props.children}
		</AccordionContext.Provider>
	)
}

AccordionApi.Content = props => {
	const { openIndexes } = getAccordionContext()
	return <Content isOpen={openIndexes.includes(props.index)} {...props} />
}

AccordionApi.Button = props => {
	const { openIndexes, setActiveIndex } = getAccordionContext()
	return (
		<Button
			className={classNames(openIndexes.includes(props.index) ? props.openClassName : null)}
			isOpen={openIndexes.includes(props.index)}
			onClick={() => setActiveIndex(props.index)}
			{...props}
		/>
	)
}

AccordionApi.Item = props => <Item {...props} direction="vertical" />

export default AccordionApi
