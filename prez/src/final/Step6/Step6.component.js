import React from 'react'
import Accordion from './Accordion'
import Tabs from './Tabs'

export default class Step6 extends React.Component {
	render() {
		return (
			<div>
				<section>
					<h3>Accordion</h3>
					<Accordion {...this.props} />
				</section>
				<section>
					<h3>Tabs</h3>
					<Tabs {...this.props} />
				</section>
			</div>
		)
	}
}
