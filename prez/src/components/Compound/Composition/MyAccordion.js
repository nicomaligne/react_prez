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
			<Accordion>
				{({ openIndexes, onClick }) =>
					items.map(item => ( // eslint-disable-line
						<div>
							<Accordion.Item title={item.title} />
							<Accordion.Button onClick={onClick} />
							<Accordion.Content>{item.content}</Accordion.Content>
						</div>
					))
				}
			</Accordion>
		)
	}
}
