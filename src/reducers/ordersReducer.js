export const initialOrdersState = {
    orders: [],
    total: 0,
    alert: null
}

export const ordersReducer = (state = initialOrdersState, action) => {

    switch (action.type) {
        
        case 'PLACE_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.item],
                total: state.total + action.item.price,
                alert: null
            };

        case 'CANCEL_ORDER':
            const key = action.item.key;
            const filteredOrders = state.orders.filter((v) => v.key != key);

            return {
                ...state,
                orders: filteredOrders,
                total: state.total - action.item.price,
                alert: null
            }

        case 'UPDATE_ALERT':
            return {
                ...state,
                alert: action.alert
            }

        case 'DISCOUNT': 
            return {
                ...state,
                total: state.total * 0.9
            }
    }

    return state;
}