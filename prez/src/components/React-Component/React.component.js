/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Here we can see that the component render every time.
 * Why ? There is no should component update implement.
 * So the component render every time the parent render.
 */

export default class ButtonComponent extends React.Component {
	render = () => {
		console.log('Render Component');
		return <button onClick={this.props.onClick}>{this.props.label}</button>;
	};
}

ButtonComponent.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
};

/* eslint-enable react/prefer-stateless-function */
