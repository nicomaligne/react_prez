import React from 'react'
import { Tabs } from '../Tabs'

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

export default class MyTabs extends React.Component {
	render() {
		return (
			<Tabs>
				{({ openIndexes, onClick }) =>
					items.map(( 						// eslint-disable-line

						item,
						index,
					) => (
						<Tabs.Item>
							<Tabs.Content opened={openIndexes.includes(index)}>
								{item.content}
							</Tabs.Content>
							<Tabs.Button
								title={item.title}
								index={index}
								onClick={onClick}
								opened={openIndexes.includes(index)}
							/>
						</Tabs.Item>
					))
				}
			</Tabs>
		)
	}
}
