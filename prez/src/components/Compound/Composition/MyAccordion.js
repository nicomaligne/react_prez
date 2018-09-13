import React from 'react'
import { Accordion } from '../Accordion'

const items = [
	{
		title: 'ItemA',
		content: 'ItemA content',
	},
	{
		title: 'ItemB',
		content: 'ItemB content',
	},
]

export default class MyAccordion extends React.Component {
	render() {
		return (
			<Accordion handleClick={() => console.log('handleClick custom')}>
				{items.map((
					// eslint-disable-line
					item,
					index,
				) => (
					<Accordion.Item title={item.title}>
						<Accordion.Button index={index} />
						<Accordion.Content index={index}>{item.content}</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion>
		)
	}
}
