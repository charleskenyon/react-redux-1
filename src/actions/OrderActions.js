import * as actionType from '../constants/ActionTypes';
import rules from '../utils/rules';

export function validateOrder(item) {
    return (dispatch, getState) => {
        const { orders } = getState().ordersState;
        const validate = rules(orders, item);
        
        if (validate === 'discount') {
            dispatch(discount());
        } else if (typeof validate === 'object') {
            dispatch(placeOrder(item));
        } else {
            dispatch(updateAlert(validate));
        }
    }
}

function placeOrder(item) {
    return {
        type: actionType.PLACE_ORDER,
        item
    }
}

function updateAlert(alert) {
    return {
        type: actionType.UPDATE_ALERT,
        alert
    }
}

function discount() {
    return {
        type: actionType.DISCOUNT
    }
}

export function cancelOrder(item) {
    return {
        type: actionType.CANCEL_ORDER,
        item
    }
}
