import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

const CourseList = ({ courses, validateOrder }) => {
	
	const nodes = Object.keys(courses).map((key, index) => (
		<Course key={index} name={key} items={courses[key]} validateOrder={validateOrder} />
	));

	return (
		<div className="col-md-7">
			<h2 className="text-center">Menu</h2>
			{nodes}
		</div>
	);
}

CourseList.propTypes = {
	courses: PropTypes.object.isRequired,
	validateOrder: PropTypes.func.isRequired
}

export default CourseList;