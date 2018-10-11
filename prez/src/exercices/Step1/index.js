import React from 'react'
import { BasicAccordion } from './BasicAccordion.component'
import { PropsForm } from '../../Shared/PropsForm.component'

export class Accordion extends React.Component {
	render() {
		return (
			<PropsForm tabs={false} position={false}>
				{props => <BasicAccordion {...this.props} {...props} />}
			</PropsForm>
		)
	}
}

export default Accordion
