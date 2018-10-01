import React from 'react'
import ChildsAsFuncAccordion from './ChildAsFuncAccordion.component'
import ChildAsFuncTabs from './ChildAsFuncTabs.component'
import { PropsForm } from '../Shared/PropsForm.component'

export default class Step4 extends React.Component {
	render() {
		return (
			<PropsForm>
				{props => (
					<div>
						<ChildsAsFuncAccordion {...this.props} {...props} />
						<ChildAsFuncTabs {...this.props} {...props} />
					</div>
				)}
			</PropsForm>
		)
	}
}
