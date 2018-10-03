import React from 'react'
import MyAccordion from './MyAccordion'
import MyTabs from './MyTabs'

export default class Step6 extends React.Component {
	render() {
		return (
			<div>
				<section>
					<h3>Accordion</h3>
					<MyAccordion {...this.props} />
				</section>
				<section>
					<h3>Tabs</h3>
					<MyTabs {...this.props} />
				</section>
			</div>
		)
	}
}
