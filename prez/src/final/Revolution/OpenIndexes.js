import { useState } from 'react'

const preventClose = (index, openIndexes, preventClosingLastItem) => {
	if (preventClosingLastItem && openIndexes.length === 1) {
		return openIndexes
	}
	return openIndexes.filter(i => i !== index)
}

const multiIndexes = (index, openIndexes, preventClosingLastItem) => {
	if (openIndexes.includes(index)) {
		return preventClose(index, openIndexes, preventClosingLastItem)
	}
	return [...openIndexes, index]
}

const singleIndexes = (index, openIndexes, preventClosingLastItem) => {
	if (openIndexes.includes(index)) {
		return preventClose(index, openIndexes, preventClosingLastItem)
	}
	return [index]
}

const useOpenIndexes = initialState => {
	const [openIndexes, setOpenIndexes] = useState(initialState)
	function onIndexChange(index, multiSelect, preventClosingLastItem) {
		if (multiSelect) {
			setOpenIndexes(multiIndexes(index, openIndexes, preventClosingLastItem))
		} else {
			setOpenIndexes(singleIndexes(index, openIndexes, preventClosingLastItem))
		}
	}
	return [openIndexes, onIndexChange]
}

export { useOpenIndexes }
