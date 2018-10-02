import React from 'react'
import MyAccordion from './MyAccordion'
import MyTabs from './MyTabs'

const Step5 = props => (
	<div>
		<section>
			<h3>Accordion</h3>
			<MyAccordion {...props} />
		</section>
		<section>
			<h3>Tabs</h3>
			<MyTabs {...props} />
		</section>
	</div>
)

export default Step5