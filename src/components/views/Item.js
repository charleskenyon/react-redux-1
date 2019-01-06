import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, price, onClick }) => (
	<li>
		<div className="clearfix">
			<label> {name} - £{price} </label>
			<div className="float-right">
				<button type="button"  className="btn btn-light btn-sm" 
					onClick={onClick.bind(null, 'diner1')}>order diner 1</button>
				<button type="button" className="btn btn-light btn-sm ml-1" 
					onClick={onClick.bind(null, 'diner2')}>order diner 2</button>
			</div>
		</div>
	</li>
);

Item.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Item;