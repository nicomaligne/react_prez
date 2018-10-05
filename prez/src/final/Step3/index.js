import React from 'react'
import { PropsForm } from '../../Shared/PropsForm.component'
import { EnhancedAccordionAndTab } from './EnhancedAccordionAndTab.component'

export class Accordion extends React.Component {
	render() {
		return (
			<PropsForm>{props => <EnhancedAccordionAndTab {...this.props} {...props} />}</PropsForm>
		)
	}
}

export default Accordion
