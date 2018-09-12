import styled from 'styled-components'

const AccordionItem = styled.div`
	display: flex;
	width: 600px;
	flex-direction: ${props => (props.direction === 'horizontal' ? 'row' : 'column')};
`

export default AccordionItem
