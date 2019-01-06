import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';
import Total from './Total';

const OrderList = ({ orders, total, cancelOrder }) => {
    const uniqueCourses = [...new Set(orders.map((order) => order.course))];

    const nodes = uniqueCourses.map((course) => {
        
        const innerNodes = orders.filter((order) => order.course === course).map((order) => (
            <Order {...order} onClick={() => cancelOrder(order)} />
        ));

        return (
            <div key={course + 'Orders'}>
                <h5 className="mb-1">{course}</h5>
                <ul>
                    {innerNodes}
                </ul>
            </div>
        );
	});

	return (
        <div className="col-md-5 bg-light" >
            <Total key='total' total={total} />
		    {nodes}
        </div>
    );
}

OrderList.propTypes = {
    orders: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    cancelOrder: PropTypes.func.isRequired
}

export default OrderList;