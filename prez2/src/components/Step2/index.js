import React from 'react'
import { PropsForm } from '../Shared/PropsForm.component'
import { EnhancedAccordion } from './EnhancedAccordion.component'

export class Accordion extends React.Component {
	render() {
		return <PropsForm>{props => <EnhancedAccordion {...this.props} {...props} />}</PropsForm>
	}
}

export default Accordion
