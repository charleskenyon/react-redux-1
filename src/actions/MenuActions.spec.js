import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios  from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './MenuActions';
import * as actionType from '../constants/ActionTypes';

describe('actions', () => {
    describe('fetchMenu action (async)', () => {
        const mockStore = configureMockStore([thunk]);
        const mock = new MockAdapter(axios);
        afterEach(() => mock.restore());

        it ('should create RECEIVE_MENU action when the menu has been fetched', () => {
            const url = '/menu-data.json';
            const store = mockStore({ courses: {} });
            mock.onGet(url).reply(200, { starters: [] });

            const expectedActions = [
                { type: actionType.REQUEST_MENU },
                { type: actionType.RECEIVE_MENU, courses: { starters: [] }}
            ];

            return store.dispatch(actions.fetchMenu(url)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});