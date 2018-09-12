import React from 'react'
import { Accordion } from '../Shared/Accordion.component'
import AccordionButton from '../Shared/AccordionButton'
import AccordionContents from '../Shared/AccordionContents.component'
import AccordionItem from '../Shared/AccordionItem.component'

function StandardAccordion({ items, ...props }) {
	return (
		<Accordion {...props}>
			{({ openIndexes, handleItemClick }) => (
				<div>
					{items.map((item, index) => (
						<AccordionItem key={item.title} direction="vertical">
							<AccordionButton
								isOpen={openIndexes.includes(index)}
								onClick={() => handleItemClick(index)}
							>
								{item.title}{' '}
								<span>{openIndexes.includes(index) ? '🔽' : '🔼'}</span>
							</AccordionButton>
							<AccordionContents isOpen={openIndexes.includes(index)}>
								{item.contents}
							</AccordionContents>
						</AccordionItem>
					))}
				</div>
			)}
		</Accordion>
	)
}

export default StandardAccordion
