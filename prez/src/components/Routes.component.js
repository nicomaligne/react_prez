import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Stateless from './Stateless';
import ReactComponent from './React-Component';
import ReactPureComponent from './React-Pure-Component';
import App from '../App.js';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/stateless" component={Stateless} />
			<Route path="/react-component" component={ReactComponent} />
			<Route path="/react-pure-component" component={ReactPureComponent} />
		</Switch>
	);
}
