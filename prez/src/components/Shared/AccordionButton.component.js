import styled from 'styled-components'

const Button = styled.button`
	text-align: left;
	min-width: 80px;
	cursor: pointer;
	flex: 1;
	padding-top: 10px;
	padding-bottom: 10px;
	fontsize: 20px;
	border: none;
	background: ${props => (props.isOpen ? '#F3C446' : '#F6F6F6')};
	color: ${props => (props.isOpen ? 'white' : 'black')};
	&:focus {
		outline: none;
	}
`

export default Button
