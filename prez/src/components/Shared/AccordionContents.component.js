import styled from 'styled-components'

const AccordionContents = styled.div`
	padding: 10px;
	display: ${props => (props.isOpen ? 'block' : 'none')};
	border: 1px solid #f6f6f6;
`

export default AccordionContents
