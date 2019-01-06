import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Course = ({ name, items, validateOrder }) => {

	const nodes = items.map((item) => (
		<Item key={item.id} {...item} 
			onClick={(diner) => validateOrder({...item, course: name, diner: diner, key: new Date().getTime()})} />
	));
	
	return (
		<div>
			<h5> {name} </h5>
			<ol> {nodes} </ol>
		</div> 
	)
};

Course.propTypes = {
	name: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	validateOrder: PropTypes.func.isRequired
}

export default Course;