import React from 'react'
import Accordion from './Accordion'
import Tabs from './Tabs'

const Step5 = props => (
	<div>
		<section>
			<h3>Accordion</h3>
			<Accordion {...props} />
		</section>
		<section>
			<h3>Tabs</h3>
			<Tabs {...props} />
		</section>
	</div>
)

export default Step5