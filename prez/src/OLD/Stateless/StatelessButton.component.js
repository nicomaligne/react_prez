import React from 'react';
import PropTypes from 'prop-types';

export default function FunctionalButton({ onClick, label }) {
	console.log('Render functional button');
	return <button onClick={onClick}>{label}</button>;
}

FunctionalButton.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
};
