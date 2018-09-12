import styled from 'styled-components'

const Button = styled.button`
	text-align: 'left';
	min-width: 80;
	cursor: 'pointer';
	flex: 1;
	padding-top: 10;
	padding-bottom: 10;
	fontsize: 20;
	border: 'none';
	background-color: ${props => (props.isOpen ? 'rgba(255, 255, 255, 0.2)' : null)};
	':focus': {
		outline: 'none';
		background-color: 'rgba(255, 255, 255, 0.4)';
	}
`

export default Button
