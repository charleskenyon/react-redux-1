import React from 'react';
import AlertContainer from './containers/AlertContainer';
import OrderListContainer from './containers/OrderListContainer';
import CourseListContainer from './containers/CourseListContainer';

const App = () => [
    <AlertContainer key="alert" />,
    <div key="main" className="row">
        <CourseListContainer />
        <OrderListContainer />
    </div>
];

export default App;