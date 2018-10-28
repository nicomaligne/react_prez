import React from 'react'
import Accordion from './Accordion'
// import Tabs from './Tabs'

export default class revolution extends React.Component {
	render() {
		return (
			<div>
				<section>
					<h3>Accordion</h3>
					<Accordion {...this.props} />
				</section>
			</div>
		)
	}
}
