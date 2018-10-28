import { useState, useEffect } from 'react'

const preventClose = (index, openIndexes, preventClosingLastItem) => {
	if (preventClosingLastItem && openIndexes.length === 1) {
		return openIndexes
	}
	return openIndexes.filter(i => i === index)
}

const multiIndexes = (index, openIndexes, preventClosingLastItem) => {
	return [index]
	// return preventClose(index, openIndexes, preventClosingLastItem)
	// }
	// return [...openIndexes, index]
}

const useOpenIndexes = index => {
	const [openIndexes, setOpenIndexes] = useState([index])
	function onIndexChange(index) {
		if (openIndexes.includes(index)) {
			setOpenIndexes(openIndexes.filter(i => i !== index))
		} else {
			setOpenIndexes([...openIndexes, index])
		}
	}
	return [openIndexes, onIndexChange]
}

export { useOpenIndexes }
