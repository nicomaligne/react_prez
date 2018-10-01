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
						<p>
							<h3>Accordion</h3>
							<RenderPropsAccordion {...this.props} {...props} />
						</p>
						<p>
							<h3>Tabs</h3>
							<RenderPropsTabs {...this.props} {...props} />
						</p>
					</React.Fragment>
				)}
			</PropsForm>
		)
	}
}
