import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as rules from '../utils/rules';
import * as actions from './OrderActions';
import * as actionType from '../constants/ActionTypes';

describe('actions', () => {
    describe('validateOrder action (async)', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({ ordersState: { orders: [] }});
        afterEach(() => store.clearActions());

        it ('should call rules function', () => {
            rules.default = jest.fn();
            store.dispatch(actions.validateOrder({}))
            expect(rules.default).toHaveBeenCalledWith([], {});
        });

        it ('should call getState function', () => {
            const dispatch = jest.fn();
            const getState = jest.fn( () => ({ ordersState: []}));
            actions.validateOrder({})(dispatch, getState);
            expect(getState).toHaveBeenCalled();
        });

        it ('should create PLACE_ORDER action when rules return an object', () => {
            rules.default = jest.fn(() => ({}));
            store.dispatch(actions.validateOrder({}))

            const expectedActions = [
                { type: actionType.PLACE_ORDER, item: {}}
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });

        it ('should create UPDATE_ALERT action when rules return an object', () => {
            rules.default = jest.fn(() => '');
            store.dispatch(actions.validateOrder({}))

            const expectedActions = [
                { type: actionType.UPDATE_ALERT, alert: ''}
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
