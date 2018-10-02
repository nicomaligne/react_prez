import React from 'react'
import RenderPropsAccordion from './RenderPropsAccordion'
import RenderPropsTabs from './RenderPropsTabs'

export default class Step4 extends React.Component {
	render() {
		return (
			<div>
				<section>
					<h3>Accordion</h3>
					<RenderPropsAccordion {...this.props} />
				</section>
				<section>
					<h3>Tabs</h3>
					<RenderPropsTabs {...this.props} />
				</section>
			</div>
		)
	}
}
