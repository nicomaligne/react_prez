import React from 'react';
import Proptypes from 'prop-types';

class Counter extends React.Component {
	static propTypes = {
		children: Proptypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = { value: 10 };
	}

	increase = () => {
		this.setState(prevState => ({
			value: prevState.value + 1,
		}));
	};

	decrease = () => {
		this.setState(prevState => ({
			value: prevState.value - 1,
		}));
	};

	render() {
		console.log('render Counter');
		return (
			<React.Fragment>
				{this.state.value}
				{this.props.children(this.increase, this.decrease)}
			</React.Fragment>
		);
	}
}

export default Counter;
