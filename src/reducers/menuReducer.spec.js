import { menuReducer, initialMenuState } from './menuReducer';
import * as actionType from '../constants/ActionTypes';

describe('reducers', () => {
    describe('menuReducer reducer', () => {
        it ('returns the initial state', () => {
            expect(menuReducer(undefined, {})).toEqual(initialMenuState);
        });

        it ('handles request menu', () => {
            expect(menuReducer(initialMenuState, {type: actionType.REQUEST_MENU})).toEqual({
                ...initialMenuState,
                isFetching: true
            });
        });

        it ('handles receive menu', () => {
            const action = { type: actionType.RECEIVE_MENU, courses: [] }
            expect(menuReducer(initialMenuState, action)).toEqual({
                courses: [], 
                isFetching: false, 
                fetchSuccess: true 
            });
        });
    });
});