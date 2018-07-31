/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

export default class PureButton extends React.PureComponent {
	render() {
		console.log('Render PureButton');
		return <button onClick={this.props.onClick}>{this.props.label}</button>;
	}
}

PureButton.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
};

/* eslint-enable react/prefer-stateless-function */
