import React from 'react'
import RenderPropsAccordion from './RenderPropsAccordion'
import RenderPropsTabs from './RenderPropsTabs'
import { PropsForm } from '../Shared/PropsForm.component'

export default class Step4 extends React.Component {
	render() {
		return (
			<PropsForm>
				{props => (
					<div>
						<RenderPropsAccordion {...this.props} {...props} />
						<RenderPropsTabs {...this.props} {...props} />
					</div>
				)}
			</PropsForm>
		)
	}
}
