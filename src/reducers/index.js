import { combineReducers } from 'redux';
import { menuReducer } from './menuReducer';
import { ordersReducer } from './ordersReducer';

export default combineReducers({
    menuState: menuReducer,
    ordersState: ordersReducer
});
