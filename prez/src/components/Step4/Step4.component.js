import React from 'react'
import RenderPropsAccordion from './RenderPropsAccordion'
import RenderPropsTabs from './RenderPropsTabs'
import { PropsForm } from '../Shared/PropsForm.component'

export default class Step4 extends React.Component {
	render() {
		return (
			<PropsForm>
				{props => (
					<React.Fragment>
						<div>
							<h3>Accordion</h3>
							<RenderPropsAccordion {...this.props} {...props} />
						</div>
						<div>
							<h3>Tabs</h3>
							<RenderPropsTabs {...this.props} {...props} />
						</div>
					</React.Fragment>
				)}
			</PropsForm>
		)
	}
}
