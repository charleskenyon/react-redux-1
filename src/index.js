import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import App from './components/App';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// App
//     AlertContainer
//         Alert 
//     OrderListContainer
//         OrderList 
//             Order
//             Total 
//     CourseListContainer
//         CourseList
//             Course
//                  Item


// Testing critical components only due to time constraints.
// (async action creators, reducers, utils).