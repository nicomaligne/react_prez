import React from 'react'
import RenderPropsAccordion from './RenderPropsAccordion'
import RenderPropsTabs from './RenderPropsTabs'

const Step4 = props => (
	<div>
		<section>
			<h3>Accordion</h3>
			<RenderPropsAccordion {...props} />
		</section>
		<section>
			<h3>Tabs</h3>
			<RenderPropsTabs {...props} />
		</section>
	</div>
)

export default Step4
