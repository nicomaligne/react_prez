import React from 'react'
import MyAccordion from './MyAccordion'
import MyTabs from './MyTabs'
import { PropsForm } from '../Shared/PropsForm.component'

export default class Step5 extends React.Component {
	render() {
		return (
			<PropsForm>
				{props => (
					<div>
						<MyAccordion {...this.props} {...props} />
						<MyTabs {...this.props} {...props} />
					</div>
				)}
			</PropsForm>
		)
	}
}
