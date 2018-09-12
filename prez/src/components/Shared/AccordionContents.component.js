import styled from 'styled-components'

const AccordionContents = styled.div`
	padding: 10px;
	height: ${props => (props.open ? '200px' : '0px')};
`

export default AccordionContents
