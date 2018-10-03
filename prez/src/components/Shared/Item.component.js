import styled from 'styled-components'

const Item = styled.div`
	display: flex;
	width: 600px;
	flex-direction: ${props => (props.direction === 'horizontal' ? 'row' : 'column')};
`

export default Item
