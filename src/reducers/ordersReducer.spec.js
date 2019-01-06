import { ordersReducer, initialOrdersState } from './ordersReducer';
import * as actionType from '../constants/ActionTypes';

describe('reducers', () => {
    describe('ordersReducer reducer', () => {
        it ('returns the initial state', () => {
            expect(ordersReducer(undefined, {})).toEqual(initialOrdersState);
        });

        it ('handles place order', () => {
            const action = { type: actionType.PLACE_ORDER, item: { price: 2 } }
            expect(ordersReducer(initialOrdersState, action)).toEqual({
                ...initialOrdersState,
                orders: [...initialOrdersState.orders, { price: 2 }],
                total: initialOrdersState.total + 2,
                alert: null
            });
        });

        it ('handles cancel order', () => {
            initialOrdersState.order = [{ key: 1, price: 2 }];
            initialOrdersState.total = 2;
            const action = { type: actionType.CANCEL_ORDER, item: { key: 1, price: 2 } }
            expect(ordersReducer(initialOrdersState, action)).toEqual({
                ...initialOrdersState,
                orders: [],
                total: 0
            });
        });

        it ('handles update alert', () => {
            const action = { type: actionType.UPDATE_ALERT, alert: 'mock alert' }
            expect(ordersReducer(initialOrdersState, action)).toEqual({
                ...initialOrdersState,
                alert: 'mock alert'
            });
        });
    });
});