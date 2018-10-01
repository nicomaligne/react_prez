import React from 'react'
import MyAccordion from './MyAccordion'
import MyTabs from './MyTabs'
import { PropsForm } from '../Shared/PropsForm.component'

export default class Step6 extends React.Component {
	render() {
		return (
			<PropsForm>
				{props => (
					<React.Fragment>
						<p>
							<h3>Accordion</h3>
							<MyAccordion {...this.props} {...props} />
						</p>
						<p>
							<h3>Tabs</h3>
							<MyTabs {...this.props} {...props} />
						</p>
					</React.Fragment>
				)}
			</PropsForm>
		)
	}
}
