import React from 'react';
import PropTypes from 'prop-types';

const Order = ({ name, diner, onClick }) => (
    <li>
        <span>
            <label>{name} <small>ordered by {diner}</small></label>
            <button type="button" className='btn btn-danger btn-sm ml-2' 
                onClick={onClick}>remove</button>
        </span>
    </li>
);

Order.propTypes = {
    name: PropTypes.string.isRequired,
    diner: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Order;