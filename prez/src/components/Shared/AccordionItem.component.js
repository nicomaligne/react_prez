import styled from 'styled-components'

const AccordionItem = styled.div`
	display: 'grid';
	grid-template: 'auto auto';
	grid-gap: 4;
	grid-auto-flow: ${props => (props.direction === 'horizontal' ? 'column' : 'row')};
`

export default AccordionItem
