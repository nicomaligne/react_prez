import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 10 };
	}

	increment = () => {
		this.setState(prevState => {
			value: prevState.value + 1;
		});
	};

	decrease = () => {
		this.setState(prevState => {
			value: prevState.value - 1;
		});
	};

	render() {
		return (
			<React.Fragment>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrease}>-</button>
			</React.Fragment>
		);
	}
}

export default Counter;
