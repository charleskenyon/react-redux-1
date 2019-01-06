import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ total }) => (
	<h3> Total: £{total} </h3>
);

Total.propTypes = {
    total: PropTypes.number.isRequired
}

export default Total;