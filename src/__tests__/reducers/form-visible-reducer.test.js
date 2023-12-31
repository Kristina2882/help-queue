import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

describe('formVisibleReducer', () => {
test('Should return default state is the action is not recognized.', () => {
    expect(formVisibleReducer(false, {type:null})).toEqual(false)
});

test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, {type: c.TOGGLE_FORM})).toEqual(true);

});

});