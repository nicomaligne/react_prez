/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Link to="/stateless" href="/stateless">
					<button>Stateless component</button>
				</Link>
				<Link to="/react-component" href="/react-component">
					<button>React component</button>
				</Link>
				<Link to="/react-pure-component" href="/react-pure-component">
					<button>React pure component</button>
				</Link>
			</div>
		);
	}
}

export default App;

/* eslint-enable react/prefer-stateless-function */
