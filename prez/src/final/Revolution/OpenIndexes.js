import { useState } from 'react'

const preventClose = (index, openIndexes, preventClosingLastItem) => {
	if (preventClosingLastItem && openIndexes.length === 1) {
		return openIndexes
	}
	return openIndexes.filter(i => i === index)
}

const multiIndexes = (index, openIndexes, preventClosingLastItem) => {
	console.log({ index })
	console.log({ openIndexes })
	// if (openIndexes.includes(index)) {
	return [index]
	// return preventClose(index, openIndexes, preventClosingLastItem)
	// }
	// return [...openIndexes, index]
}

const useOpenIndexes = index => {
	// console.log({ multiSelect })
	const [openIndexes, setOpenIndexes] = useState([index])
	if (index < 0) {
		return openIndexes
	}
	if (openIndexes.includes(index)) {
		setOpenIndexes(openIndexes.filter(i => i !== index))
	} else {
		setOpenIndexes([...openIndexes, index])
	}
	return openIndexes
	// if (multiSelect && openIndexes.includes(index)) {
	//     setOpenIndexes([index])
	// }
	// }
	// return setOpenIndexes([index])
	// return setOpenIndexes(multiIndexes(index, openIndexes, preventClosingLastItem))
	// }
	// let toto = openIndexes
	// if (openIndexes.includes(index)) {
	// toto = preventClose(index, openIndexes, preventClosingLastItem)
	// console.log({ toto })
	// return preventClose(index, openIndexes, preventClosingLastItem)
	// return toto
	// }
	// console.log({ toto })

	// if (!openIndexes.includes(index)) {
	// 	setOpenIndexes([...openIndexes, index])
	// }
	// if (openIndexes.includes(index)) {

	// }
	// return toto
	// setOpenIndexes([toto])
	// return openIndexes

	// 	setOpenIndexes(
	// 		openIndexes.includes(index)
	// 			? preventClose(openIndexes, index, props.preventClosingLastItem)
	// 			: [index],
	// 	)
	// return openIndexes
	// console.log({ openIndexes })
	// console.log({ setOpenIndexes })
	// if (props.multiSelect) {
	// 	return setOpenIndexes(
	// 		openIndexes.includes(index)
	// 			? preventClose(openIndexes, index, props.preventClosingLastItem)
	// 			: [...openIndexes, index],
	// 	)
	// }
}

export { useOpenIndexes }