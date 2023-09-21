import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import ticketListReducer from '../../reducers/ticket-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

    test('Should return default state if there is no action recognized', () => {
        expect(rootReducer({}, {type: null})).toEqual({
            mainTicketList: {},
            formVisibleOnPage: false
        });
    });

    test('Check that the initial state of rootReducer equals to initial state of ticketListReducer', () => {
        expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, {type:null}));
    });

    test('Should check that formVisibleReducer initial state matches rootReducer', () => {
      expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}));
    });

    test('Check that ADD_TICKET action works correctly for ticketListReducer and root reducer', () => {
        const action = {
            type: c.ADD_TICKET,
            names: 'Ryan & Aimen',
            location: '4b',
            issue: 'Redux action is not working correctly.',
            id: 1
        }
        store.dispatch(action);
        expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, action));
    });

    test('Check that TOGGLE_FORM action works correctly in formVisibleReducer and root reducer', () => {
        const action = {
            type: c.TOGGLE_FORM
        }
        store.dispatch(action);
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));

    });
});