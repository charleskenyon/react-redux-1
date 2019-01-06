import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
	
	if (!alert) {
		return null;
	}

	return (
		<div className="alert alert-danger text-center" role="alert">
			{alert}
		</div>
	);
};

Alert.propTypes = {
	alert: PropTypes.string
}

export default Alert;